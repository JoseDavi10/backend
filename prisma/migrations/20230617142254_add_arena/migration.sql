/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `Proprietario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telefone` to the `Proprietario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proprietario" ADD COLUMN     "telefone" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Arena" (
    "id_arena" SERIAL NOT NULL,
    "nome_arena" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "quant_quadras" INTEGER NOT NULL,
    "modalidades" TEXT NOT NULL,
    "telefone_arena" INTEGER NOT NULL,

    CONSTRAINT "Arena_pkey" PRIMARY KEY ("id_arena")
);

-- CreateIndex
CREATE UNIQUE INDEX "Arena_endereco_key" ON "Arena"("endereco");

-- CreateIndex
CREATE UNIQUE INDEX "Arena_cnpj_key" ON "Arena"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Arena_telefone_arena_key" ON "Arena"("telefone_arena");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_telefone_key" ON "Proprietario"("telefone");
