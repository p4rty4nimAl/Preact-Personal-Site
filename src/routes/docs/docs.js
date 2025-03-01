export const docs = {
    "0090C4": [
        "This cipher operates using the same technique as bipher.",
        "It additionally uses an offset of 0x0090C4 on each pass, which is a reference to the background colour of Weezer's blue album.",
        "",
        "The cipher is performed by using a sliding window. The window is two characters wide, such that each character in",
        "the output string is determined by the character at the same and previous index in the input string.",
        "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for",
        "the character in the output string, which is then reversed. By performing the cipher again, the 'bipher' cipher is completed."
    ],
    "Bipher": [
        "The cipher is performed by using a sliding window. The window is two characters wide, such that each character in",
        "the output string is determined by the character at the same and previous index in the input string.",
        "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for",
        "the character in the output string, which is then reversed. By performing the cipher again, the 'bipher' cipher is completed."
    ],
    "Caesar Variation": [
        "This cipher is a simple substitution cipher. The substitution alphabet is always in the same order as the alphabet,",
        "but is offset by the length of the input string, or 1 if the length of the input string is a multiple of 16.",
        "For an example input of 'a', the offset would be the length, 1, giving a substitution alphabet of 'b, c, d, ..., a'"
    ],
    "Continuous Register Cipher": `TBW`,
    "Hashed CRC": `TBW`,
    "Hashed CRC: Reworked": `TBW`,
    "Weez'd 2": `TBW`,
    "Keyed CRC": `TBW`,
    "Keysmash Cipher": [
        "The cipher is performed by using a sliding window. The window is two characters wide, such that each character in",
        "the output string is determined by the character at the same and previous index in the input string.",
        "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for",
        "the character in the output string, completing the cipher."
    ],
    "Poems": [
        "Occasionally, I am struck by an inexplicable inspiration to write. If that is not code, it is probably poetry.", 
        <a href="/projects/poetry">They can be found here.</a>
    ],
    "Minecraft Server Pinger": [
        "This is a simple tool which interfaces with the API. The tool provides a nicer user interface than the raw",
        "HTTP and JSON request and response, respectively.",
        "To use it, the user must simply enter the IP address of a Minecraft: Java Edition server."
    ],
    "Background Creator (Beta)": `TBW`,
    "Embed Creator (Beta)": `TBW`,
    "Embed Browser (Beta)": `TBW`,
    "API": ["Here is some API documentation. Public routes can be found under v0 and v1.",
        "TBW"
    ],
    "Substitution Cipher Solver": [
        "TBW"
    ]
}