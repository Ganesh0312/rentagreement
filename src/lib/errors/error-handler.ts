import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { AppError } from "./AppError";
import type { ApiResponse } from "@/types/api.types";

export function handleApiError(error: unknown): NextResponse<ApiResponse<never>> {
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: error.message,
          code: error.code,
          details: error.details,
        },
      },
      { status: error.statusCode },
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Validation failed",
          code: "VALIDATION_ERROR",
          details: error.flatten(),
        },
      },
      { status: 422 },
    );
  }

  console.error("[API Error]", error);

  return NextResponse.json(
    {
      success: false,
      error: {
        message: "Internal server error",
        code: "INTERNAL_ERROR",
      },
    },
    { status: 500 },
  );
}

export function apiSuccess<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}
