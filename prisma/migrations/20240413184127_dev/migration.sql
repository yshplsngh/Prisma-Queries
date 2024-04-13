-- DropForeignKey
ALTER TABLE "User3" DROP CONSTRAINT "User3_userPreferenceId_fkey";

-- AlterTable
ALTER TABLE "User3" ALTER COLUMN "userPreferenceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User3" ADD CONSTRAINT "User3_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "Subscribe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
