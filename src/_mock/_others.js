import _mock from "./_mock";
import { randomInArray } from "./funcs";

// ----------------------------------------------------------------------

export const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  image: _mock.image.feed(index),
  description: _mock.text.description(index),
}));

export const _carouselsMembers = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: `https://minimal-assets-api-dev.vercel.app/assets/images/members/member-${
    index + 1
  }.jpg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Questions ${index + 1}`,
  detail: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

export const _addressBooks = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  receiver: _mock.name.fullName(index),
  fullAddress: _mock.address.fullAddress(index),
  phone: _mock.phoneNumber(index),
  addressType: index === 0 ? "Home" : "Office",
  isDefault: index === 0,
}));

// ----------------------------------------------------------------------

export const _skills = [...Array(9)].map((_, index) => ({
  label: [
    "Hatha, Vinyasa, Astanga, Yin Yoga & more",
    "Pilates, toning & fitness challenges",
    "Guided meditations",
    "Beginner & intermediate classes",
    "Prenatal yoga & fitness",
    "Targeted body part workouts",
    "Live streamed classes & hangouts",
    "Boho diaries & podcast episodes",
    "Vegan life & plant based recipes",
  ][index],
  value: _mock.number.percent(index),
}));
export const _tools = [...Array(5)].map((_, index) => ({
  label: [
    "Search & filter to discover just what you need",
    "Save your favourites & create playlists for easy access",
    "Schedule workouts ahead of time in your personal calendar",
    "Record progress & insights in your private journal",
    "PDownload classes, videos & audio for offline use",
  ][index],
  value: _mock.number.percent(index),
}));
export const _community = [...Array(6)].map((_, index) => ({
  label: [
    "Monthly check-in videos about what’s going on behind the scenes",
    "Monthly themes to stay connected to our intention and each other",
    "Monthly class calendars to align and practice our thematic intention",
    "Monthly livestreams to connect, reflect, and answer questions",
    "Monthly emails with exclusive news and offers",
    "Monthly emails with exclusive news and offers",
  ][index],
  value: _mock.number.percent(index),
}));
export const _content = [...Array(3)].map((_, index) => ({
  label: [
    "Tons of exclusive members-only videos",
    "Dozens of challenges, series & calendars",
    "An ever-expanding and evolving catalog",
  ][index],
  value: _mock.number.percent(index),
}));

// ----------------------------------------------------------------------

export const _accordions = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Accordion ${index + 1}`,
  subHeading: _mock.text.title(index),
  detail: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

export const _dataGrid = [...Array(36)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  lastLogin: _mock.time(index),
  performance: _mock.number.percent(index),
  rating: _mock.number.rating(index),
  status: randomInArray(["online", "away", "busy"]),
  isAdmin: _mock.boolean(index),
  lastName: _mock.name.lastName(index),
  firstName: _mock.name.firstName(index),
  age: _mock.number.age(index),
}));

// ----------------------------------------------------------------------

export const _megaMenuProducts = [...Array(10)].map((_, index) => ({
  name: _mock.text.title(index),
  image: _mock.image.feed(index),
  path: "#",
}));

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  username: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  address: _mock.address.fullAddress(index),
  phone: _mock.phoneNumber(index),
  email: _mock.email(index),
  lastActivity: _mock.time(index),
  status: randomInArray(["online", "offline", "away", "busy"]),
  position: _mock.role(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    "Your order is placed",
    "Sylvan King",
    "You have new message",
    "You have new mail",
    "Delivery processing",
  ][index],
  description: [
    "waiting for shipping",
    "answered to your comment on the Minimal",
    "5 unread messages",
    "sent from Guido Padberg",
    "Your order is being shipped",
  ][index],
  avatar: [null, _mock.image.avatar(2), null, null, null][index],
  type: [
    "order_placed",
    "friend_interactive",
    "chat_message",
    "mail",
    "order_shipped",
  ][index],
  createdAt: _mock.time(index),
  isUnRead: [true, true, false, false, false][index],
}));

// ----------------------------------------------------------------------

export const _mapContact = [
  {
    latlng: [33, 65],
    address: _mock.address.fullAddress(1),
    phoneNumber: _mock.phoneNumber(1),
  },
  {
    latlng: [-12.5, 18.5],
    address: _mock.address.fullAddress(2),
    phoneNumber: _mock.phoneNumber(2),
  },
];
