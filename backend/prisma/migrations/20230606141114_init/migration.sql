-- CreateTable
CREATE TABLE "EmployeeData" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "content" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmployeeData_pkey" PRIMARY KEY ("id")
);
