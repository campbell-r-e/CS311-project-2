/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `flashcardId` on the `ViewStats` table. All the data in the column will be lost.
  - You are about to drop the column `nextScheduledView` on the `ViewStats` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ViewStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amountUnderstood" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_ViewStats" ("amountUnderstood", "id") SELECT "amountUnderstood", "id" FROM "ViewStats";
DROP TABLE "ViewStats";
ALTER TABLE "new_ViewStats" RENAME TO "ViewStats";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
