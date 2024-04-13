-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'EDITOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "AutherId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User1" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post1" (
    "id" SERIAL NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "AutherId" INTEGER NOT NULL,
    "FavoritePostId" INTEGER,

    CONSTRAINT "Post1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User3" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userPreferenceId" INTEGER NOT NULL,

    CONSTRAINT "User3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscribe" (
    "id" SERIAL NOT NULL,
    "newsSubscribe" BOOLEAN NOT NULL,

    CONSTRAINT "Subscribe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User4" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'BASIC',

    CONSTRAINT "User4_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost1" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User1_name_key" ON "User1"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User1_email_key" ON "User1"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User3_email_key" ON "User3"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User3_userPreferenceId_key" ON "User3"("userPreferenceId");

-- CreateIndex
CREATE INDEX "User4_email_idx" ON "User4"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User4_email_name_key" ON "User4"("email", "name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost1_AB_unique" ON "_CategoryToPost1"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost1_B_index" ON "_CategoryToPost1"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_AutherId_fkey" FOREIGN KEY ("AutherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post1" ADD CONSTRAINT "Post1_AutherId_fkey" FOREIGN KEY ("AutherId") REFERENCES "User1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post1" ADD CONSTRAINT "Post1_FavoritePostId_fkey" FOREIGN KEY ("FavoritePostId") REFERENCES "User1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User3" ADD CONSTRAINT "User3_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "Subscribe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost1" ADD CONSTRAINT "_CategoryToPost1_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost1" ADD CONSTRAINT "_CategoryToPost1_B_fkey" FOREIGN KEY ("B") REFERENCES "Post1"("id") ON DELETE CASCADE ON UPDATE CASCADE;
