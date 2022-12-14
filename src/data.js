import { VscNotebook } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";

const transformation = "e_accelerate:100,r_10";

export const projects = [
  {
    name: "Note Taking App",
    id: "2413c81b-6a8d-44bb-a5bb-8f0386e71606",
    description: "A simple note taking app.",
    content:
      "Growing up, I have always had a passion for stationary and note taking apps. I have used tons of different note taking apps such as OneNote, Evernote, GoodNote, Notability, and so on. As a result, it makes me want to build my own note taking app and this is my first attempt of doing so.",
    technologies: [
      { id: "9ddb93d4-c500-4b98-90fb-ab39f54860b9", name: "React JS" },
      { id: "f2614972-1822-487e-834e-d535d882557f", name: "Firebase" },
      {
        id: "22a5d0c6-390f-4214-8935-aec94d10bcce",
        name: "React Draft Wysiwyg",
      },
      { id: "a393aea0-f2a7-44d3-bee0-60760cbc903f", name: "Tailwind CSS" },
    ],
    "source-code": "https://github.com/theinhein09/note-it",
    "live-demo": "https://note-it-09.netlify.app",
    Icon: VscNotebook,
    videos: [
      {
        id: "908f90e3-44c3-4578-a161-d6c8a1fd1f86",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/note-it_futqa1`,
      },
      {
        id: "8075c81d-31c7-432e-8c3d-a91b3172d351",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/note-it-editor_f0q5lk`,
      },
    ],
  },
  {
    name: "Facebook Clone",
    id: "cac3e0a3-5d7d-4486-88e9-8e6c0a970e92",
    description: "A clone of one of the most popular social media sites.",
    content:
      "While searching for a social media app to build a clone, I found out all the famous ones have their own unique charms. Some focus on contents, some on diversities, some on transparency, and some on ease-of-use. For Facebook, they have vast amount of features, and I learned a lot while building its clone although mine is just a basic one. I am planning to add more functionalities in the future.",
    technologies: [
      { id: "eb3fc5bf-a19f-4b89-a0ea-f89ae4c3cb4c", name: "React JS" },
      { id: "60e0d3b1-3ec4-495d-834d-8f8dd1ca5d59", name: "Firebase" },
      { id: "851933e6-c788-48a2-a932-b46d6b5c150f", name: "Tailwind CSS" },
      { id: "31813f0a-3992-4880-9bc6-494f7a38f67b", name: "Cloudinary" },
    ],
    "source-code": "https://github.com/theinhein09/facebook-clone",
    "live-demo": "https://facebook-clone-09.netlify.app/",
    Icon: BsFacebook,
    videos: [
      {
        id: "d4487aa7-17f8-446e-84fe-c786dd099ebb",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/facebook-clone-signup_vaiec1`,
      },
      {
        id: "5ee300b9-8a14-4c7d-8e0f-eb7d49f4dfe6",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/facebook-clone-post_qmibus`,
      },
      {
        id: "f7b50ad7-0edb-41fd-b6c6-93a218c46cea",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/facebook-clone-friends_szg3yr`,
      },
    ],
  },
  {
    name: "Yelp Camp",
    id: "19578fb7-920e-4618-be8f-25f98547280a",
    description: "An app like yelp but for campgrounds.",
    content:
      "This app was built in the purpose of learning MERN stacks. It has basic authentication, authorization, securities, and it is a fully functioning CRUD app.",
    technologies: [
      { id: "62e9ffba-a36f-45fe-9133-9618d5ae6677", name: "Express" },
      { id: "be0b80e5-4f40-4aab-b970-6cc70a2572fe", name: "MongoDB" },
      { id: "c5fbbb79-3f6d-4f1c-9c30-53ab65f603dd", name: "Node JS" },
      { id: "31516bcb-4368-408e-a398-640428bdfa36", name: "EJS" },
      { id: "dd750b1d-b377-4c9b-adc7-72efdffcb02e", name: "Cloudinary" },
      { id: "358f4f12-9733-45e0-95c9-048e4c6998c9", name: "Passport" },
      { id: "d73f7e9b-7f4c-4623-9541-13236c19b817", name: "Mapbox" },
    ],
    "source-code": "https://github.com/theinhein09/yelp-camp",
    "live-demo": "https://morning-depths-83122.herokuapp.com/campgrounds",
    Icon: FaYelp,
    videos: [
      {
        id: "cfa5d631-5aa4-46a1-b57a-293c91766f63",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/yelp-camp-signup_rvirf9`,
      },
      {
        id: "c933044e-11dc-40d2-a459-dee56faeb923",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/yelp-camp-map-and-review_bukk9u`,
      },
    ],
  },
  {
    name: "Color Palette Generator",
    id: "90c4f0a9-1080-42b8-b2ef-52c334240ffd",
    description:
      "This website lets you create and save color palettes from scratch or choose one of the pre-built color palettes to use.",
    content:
      "This app was built as I was inspired by 'material.io', a website where users can generate color palettes to use them in their projects. While building this app, I also focus on making it mobile responsive.",
    technologies: [
      { id: "2b73912b-1444-409b-a90f-9a961e299c52", name: "React JS" },
      { id: "30f170be-bae6-404d-bf38-6d7a273955f4", name: "Material UI" },
      { id: "b54ce442-ae77-4a68-8249-2ab804fcc814", name: "Chroma JS" },
      { id: "d5697f64-5825-4569-9aba-e6b9ab2a96a9", name: "Styled Components" },
    ],
    "source-code": "https://github.com/theinhein09/color-palette-generator",
    "live-demo": "https://color-palette-generator-09.netlify.app/",
    Icon: IoColorPaletteOutline,
    videos: [
      {
        id: "902f0ce6-4528-44d2-b58e-61afc6687bac",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/color-palette-generator-built-in_xl38to`,
      },
      {
        id: "0c638b3c-c9ff-492b-b967-ea817d393fb6",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/color-palette-generator-create_latgvv`,
      },
      {
        id: "397ae1ff-4112-47ad-869f-b4fabcfcf8ed",
        url: `https://res.cloudinary.com/dmkcfie45/video/upload/${transformation}/portfolio/color-palette-generator-save_xusuju`,
      },
    ],
  },
];
