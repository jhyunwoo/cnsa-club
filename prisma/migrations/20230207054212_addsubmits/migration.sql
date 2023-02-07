-- CreateTable
CREATE TABLE "submits" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "answers" JSONB NOT NULL,

    CONSTRAINT "submits_pkey" PRIMARY KEY ("id")
);
