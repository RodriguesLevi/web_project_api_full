import { CardModel } from "../models/Card.js";
import { CustomHttpErrors } from "../errors/CustomHttpErrors.js";

// Listar todos os cards
async function listCards(req, res) {
  try {
    const cards = await CardModel.find();
    return res.status(200).json(cards);
  } catch (error) {
    throw new CustomHttpErrors({
      message: "Could not fetch cards",
      typeError: "[GET] - Cards",
    });
  }
}

// Criar um novo card
async function createCard(req, res) {
  const { id } = req.params;
  try {
    const { name, link } = req.body;

    // Cria o card com o ID do usuário como proprietário
    const newCard = await CardModel.create({
      name,
      link,
      owner: userId,
    });

    return newCard;
  } catch (error) {
    if (error.statusCode === 422) {
      throw error;
    }
    throw new CustomHttpErrors({
      message: "Could not create card",
      typeError: "[POST] - Card creation failed",
    });
  }
}

// Deletar um card por ID
async function deleteCardById(req, res) {
  const { cardId } = req.params;
  try {
    const card = await CardModel.findById(cardId);

    // Verifica se o card existe
    if (!card) {
      throw new CustomHttpErrors({
        message: "Card not found",
        typeError: "[DELETE] - Card not found",
        statusCode: 404,
      });
    }

    await CardModel.deleteOne({ _id: cardId });
    return res.status(204).send();
  } catch (error) {
    if (error.statusCode === 404 || error.statusCode === 403) {
      throw error;
    }
    throw new CustomHttpErrors({
      message: "Could not delete card",
      typeError: "[DELETE] - Card deletion failed",
    });
  }
}

// Curtir um card
async function likeCard(req, res) {
  const { cardId } = req.params;
  const { userId } = req.user._id;
  try {
    const card = await CardModel.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: userId } }, // Adiciona o ID do usuário ao array de likes
      { new: true }
    );

    if (!card) {
      throw new CustomHttpErrors({
        message: "Card not found",
        typeError: "[PUT] - Card not found",
        statusCode: 404,
      });
    }

    return res.status(200).json(card);
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throw new CustomHttpErrors({
      message: "Could not like card",
      typeError: "[PUT] - Like card failed",
    });
  }
}

// Remover curtida de um card
async function unlikeCard(req, res) {
  const { cardId } = req.params;
  const { userId } = req.user._id;
  try {
    const card = await CardModel.findByIdAndUpdate(
      cardId,
      { $pull: { likes: userId } }, // Remove o ID do usuário do array de likes
      { new: true }
    );

    if (!card) {
      throw new CustomHttpErrors({
        message: "Card not found",
        typeError: "[DELETE] - Card not found",
        statusCode: 404,
      });
    }

    return res.status(200).json(card);
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throw new CustomHttpErrors({
      message: "Could not unlike card",
      typeError: "[DELETE] - Unlike card failed",
    });
  }
}

export { listCards, createCard, deleteCardById, likeCard, unlikeCard };
