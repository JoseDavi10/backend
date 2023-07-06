-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "telefone" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proprietario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,

    CONSTRAINT "Proprietario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id_empresa" SERIAL NOT NULL,
    "nome_empresa" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "quant_arenas" INTEGER NOT NULL,
    "telefone_empresa" INTEGER NOT NULL,
    "proprietarioId" INTEGER NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id_empresa")
);

-- CreateTable
CREATE TABLE "Arena" (
    "id_arena" SERIAL NOT NULL,
    "modalidades" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "preco" INTEGER NOT NULL,

    CONSTRAINT "Arena_pkey" PRIMARY KEY ("id_arena")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_telefone_key" ON "Cliente"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_nome_key" ON "Proprietario"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_email_key" ON "Proprietario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_senha_key" ON "Proprietario"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_cpf_key" ON "Proprietario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_telefone_key" ON "Proprietario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_endereco_key" ON "Empresa"("endereco");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_telefone_empresa_key" ON "Empresa"("telefone_empresa");

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id_empresa") ON DELETE RESTRICT ON UPDATE CASCADE;
