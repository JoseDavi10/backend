/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telefone` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "telefone" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Proprietario" (
    "nome" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,

    CONSTRAINT "Proprietario_pkey" PRIMARY KEY ("nome")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_nome_key" ON "Proprietario"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_email_key" ON "Proprietario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_senha_key" ON "Proprietario"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_cpf_key" ON "Proprietario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_cnpj_key" ON "Proprietario"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_telefone_key" ON "Cliente"("telefone");
