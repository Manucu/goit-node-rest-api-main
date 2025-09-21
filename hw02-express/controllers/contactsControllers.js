import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} from "../services/contactsServices.js";
import { HttpError } from "../helpers/HttpError.js";

export const getAll = async (_req, res, next) => {
  try {
    const data = await listContacts();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

export const getById = async (req, res, next) => {
  try {
    const item = await getContactById(req.params.id);
    if (!item) throw HttpError(404, "Not found");
    res.status(200).json(item);
  } catch (e) {
    next(e);
  }
};

export const createOne = async (req, res, next) => {
  try {
    const created = await addContact(
      req.body.name,
      req.body.email,
      req.body.phone
    );
    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
};

export const removeById = async (req, res, next) => {
  try {
    const removed = await removeContact(req.params.id);
    if (!removed) throw HttpError(404, "Not found");
    res.status(200).json(removed);
  } catch (e) {
    next(e);
  }
};

export const updateById = async (req, res, next) => {
  try {
    if (!Object.keys(req.body || {}).length) {
      throw HttpError(400, "Body must have at least one field");
    }
    const updated = await updateContact(req.params.id, req.body);
    if (!updated) throw HttpError(404, "Not found");
    res.status(200).json(updated);
  } catch (e) {
    next(e);
  }
};
