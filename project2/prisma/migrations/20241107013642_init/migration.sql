-- CreateTable
CREATE TABLE "Flashcard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "questionId" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "difficultyId" INTEGER NOT NULL,
    CONSTRAINT "Flashcard_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Difficulty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ViewStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amountUnderstood" INTEGER NOT NULL DEFAULT 0,
    "nextScheduledView" DATETIME NOT NULL,
    "flashcardId" INTEGER NOT NULL
);
