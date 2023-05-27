/* eslint-disable react/jsx-key */
import { Link } from "preact-router";

export const showcases = [
    {
      link: "/projects/0090C4",
      name: "0090C4",
      desc: "A cipher with the distinguishing feature being an offset of 0x0090C4.",
      keywords: "weez'd 2 k0090c4 cipher"
    },
    {
      link: "/projects/bipher",
      name: "Bipher",
      desc: [
        `Variation of the `,
        <Link href="/projects/keysmashCipher">Keysmash Cipher</Link>,
        `, improving upon it by simply applying it twice.`
      ],
      keywords: "keysmash cipher bipher"
    },
    {
      link: "/projects/caesarVariation",
      name: "Caesar Variation",
      desc: "This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",
      keywords: "cipher caesarvariation caesar variation"
    },
    {
      link: "/projects/continuousRegisterCipher",
      name: "Continuous Register Cipher",
      desc: "This cipher works by incrementing a counter per character it sees, then outputting the current value.",
      keywords: "crc continuousregistercipher continuous register cipher"
    },
    {
      link: "/projects/hashKeyCipher",
      name: "Hashed CRC",
      desc: [
        `This cipher is a direct improvement over the `,
        <Link href="/projects/keyedCRC">Keyed CRC</Link>, 
        `, including a hash over the key-based security it offers.`
      ],
      keywords: "continuous register cipher hashed crc hashkeycipher"
    },
    {
      link: "/projects/hCRCRework",
      name: "Hashed CRC: Reworked",
      desc: [
        `Another iteration upon the CRC, with the base being the `,
        <Link href="/projects/hashKeyCipher">Hashed CRC</Link>,
        `, updated with an improved hashing algorithm.`
      ],
      keywords: "continuous register cipher hcrcrework hashed crc: reworked"
    },
    {
      link: "/projects/K0090C4",
      name: "Weez'd 2",
      desc: [
        <Link href="/projects/0090C4">0090C4</Link>,
        `'s key-integrated alternative.`
      ],
      keywords: "0090c4 cipher k0090c4 weez'd 2"
    },
    {
      link: "/projects/keyedCRC",
      name: "Keyed CRC",
      desc: [
        `A key-based security improvement over the original  `,
        <Link href="/projects/continuousRegisterCipher">Continuous Register Cipher</Link>,
        `.`
      ],
      keywords: "continuous register cipher keyedcrc keyed crc"
    },
    {
      link: "/projects/keysmashCipher",
      name: "Keysmash Cipher",
      desc: "The original cipher, that got us here.",
      keywords: "bipher keysmashcipher keysmash cipher"
    },
    {
      link: "/projects/poetry",
      name: "Poems",
      desc: "A collection of poems written by me.",
      keywords: "ignorance someone else's panopticon poems poetry"
    },
    {
      link: "/projects/mcserverping",
      name: "Minecraft Server Pinger",
      desc: "A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",
      keywords: "minecraft server pinger mc"
    },
    {
      link: "/projects/backgroundcreator",
      name: "Background Creator (Beta)",
      desc: "A powerful tool which allows for creation of backgrounds (wallpapers) using only circles and layers.",
      keywords: "background creator circles layers wallpaper (beta)"
    },
    {
        link: "/projects/embedCreator",
        name: "Embed Creator (Beta)",
        desc: "A tool to create custom link embeds on external sites that display link previews.",
        keywords: "embed creator external previews (beta)"
    }
  ];

export default showcases;