import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// contacts.json este în root-ul proiectului (hw02-express/)
const contactsPath = path.join(__dirname, "..", "contacts.json");

export async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8").catch(() => "[]");
  return data.trim() ? JSON.parse(data) : [];
}

export async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((c) => c.id === contactId) || null;
}

export async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index === -1) return null;
  const [removed] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removed;
}

export async function updateContact(contactId, updates) {
  const contacts = await listContacts();
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index === -1) return null;
  const next = { ...contacts[index], ...updates };
  contacts[index] = next;
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return next;
}
