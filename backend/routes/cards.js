import { Router } from "express";
import {
  listCards,
  createCard,
  deleteCardById,
  likeCard,
  unlikeCard,
} from "../controllers/cardsController.js";

const router = Router();

// GET /cards — Retorna todos os cards
router.get("/", listCards);

// POST /cards — Cria um novo card
router.post("/", createCard);

// DELETE /cards/:cardId — Deleta um card por ID
router.delete("/:cardId", deleteCardById);

// PUT /cards/:cardId/likes — Curtir um card
router.put("/:cardId/likes", likeCard);

// DELETE /cards/:cardId/likes — Remover curtida de um card
router.delete("/:cardId/likes", unlikeCard);

export default router;
