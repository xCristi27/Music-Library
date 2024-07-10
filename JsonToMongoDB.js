// Declare database and collection
const database = 'test';
const collection = 'songs';

// Use the specified database
use(database);

// Define the JSON data
const data = [
    {
        "name": "Radiohead",
        "albums": [
            {
                "title": "The King of Limbs",
                "songs": [
                    {
                        "title": "Bloom",
                        "length": "5.15",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Morning Mr Magpie",
                        "length": "4.41",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Little by Little",
                        "length": "4.27",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Feral",
                        "length": "3.13",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Lotus Flower",
                        "length": "5.01",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Codex",
                        "length": "4.47",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Give Up the Ghost",
                        "length": "4.50",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    },
                    {
                        "title": "Separator",
                        "length": "5.20",
                        "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
                    }
                ],
               
            },
            {
                "title": "OK Computer",
                "songs": [
                    {
                        "title": "Airbag",
                        "length": "4.44",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Paranoid Android",
                        "length": "6.23",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Subterranean Homesick Alien",
                        "length": "4.27",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Exit Music (For a Film)",
                        "length": "4.24",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Let Down",
                        "length": "4.59",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Karma Police",
                        "length": "4.21",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Fitter Happier",
                        "length": "1.57",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Electioneering",
                        "length": "3.50",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Climbing Up the Walls",
                        "length": "4.45",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "No Surprises",
                        "length": "3.48",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "Lucky",
                        "length": "4.19",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    },
                    {
                        "title": "The Tourist",
                        "length": "5.24",
                        "description": "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work."
                    }
                ],
                
            }
        ]
    },
    {
        "name": "Portishead",
            "albums": [
                {
                    "title": "Dummy",
                    "songs": [
                        {
                            "title": "Mysterons",
                            "length": "5.02",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Sour Times",
                            "length": "4.11",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Strangers",
                            "length": "3.55",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "It Could Be Sweet",
                            "length": "4.16",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Wandering Star",
                            "length": "4.51",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "It's a Fire",
                            "length": "3.49",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Numb",
                            "length": "3.54",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Roads",
                            "length": "5.02",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Pedestal",
                            "length": "3.39",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Biscuit",
                            "length": "5.01",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Glory Box",
                            "length": "5.06",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        }
                    ],
                    
                },
            ]
    },
    {
        "name": "Portishead",
            "albums": [
                {
                    "title": "Dummy",
                    "songs": [
                        {
                            "title": "Mysterons",
                            "length": "5.02",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Sour Times",
                            "length": "4.11",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Strangers",
                            "length": "3.55",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "It Could Be Sweet",
                            "length": "4.16",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Wandering Star",
                            "length": "4.51",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "It's a Fire",
                            "length": "3.49",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Numb",
                            "length": "3.54",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Roads",
                            "length": "5.02",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Pedestal",
                            "length": "3.39",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Biscuit",
                            "length": "5.01",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        },
                        {
                            "title": "Glory Box",
                            "length": "5.06",
                            "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
                        }
                    ],
                    
                },
                {
                    "title": "Third",
                    "songs": [
                        {
                            "title": "Silence",
                            "length": "4.58",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Hunter",
                            "length": "3.57",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Nylon Smile",
                            "length": "3.16",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "The Rip",
                            "length": "4.29",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Plastic",
                            "length": "3.27",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "We Carry On",
                            "length": "6.27",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Deep Water",
                            "length": "1.31",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Machine Gun",
                            "length": "4.43",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Small",
                            "length": "6.45",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Magic Doors",
                            "length": "3.32",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        },
                        {
                            "title": "Threads",
                            "length": "5.45",
                            "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
                        }
                    ],
                    
                }
            ]
    },
    {
            "name": "Rammstein",
            "albums": [
                {
                    "title": "Herzeleid",
                    "songs": [
                        {
                            "title": "Wollt ihr das Bett in Flammen sehen?",
                            "length": "5.17",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Der Meister",
                            "length": "4.08",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Weißes Fleisch",
                            "length": "3.35",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Asche zu Asche",
                            "length": "3.51",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Seemann",
                            "length": "4.48",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Du riechst so gut",
                            "length": "4.49",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Das alte Leid",
                            "length": "5.44",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Heirate mich",
                            "length": "4.44",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Herzeleid",
                            "length": "3.41",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Laichzeit",
                            "length": "4.20",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        },
                        {
                            "title": "Rammstein",
                            "length": "4.25",
                            "description": "\n\tHerzeleid is the debut album by German Neue Deutsche Härte band Rammstein. It was released on 29 September 1995 through Motor Music. The album's original cover depicted the band members' upper bodies without clothing. This caused critics to accuse the band of trying to sell themselves as poster boys for the master race. The cover was replaced with a less controversial design for the album's international release. Despite the controversy, Herzeleid has been well received by critics and has since been certified platinum in Germany.\n "
                        }
                    ],
                    
                },
                {
                    "title": "Mutter",
                    "songs": [
                        {
                            "title": "Mein Herz brennt",
                            "length": "4.39",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Links 2-3-4",
                            "length": "3.36",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Sonne",
                            "length": "4.32",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Ich will",
                            "length": "3.37",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Feuer frei!",
                            "length": "3.08",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Mutter",
                            "length": "4.28",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Spieluhr",
                            "length": "4.46",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Zwitter",
                            "length": "4.17",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Rein raus",
                            "length": "3.09",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Adios",
                            "length": "3.49",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        },
                        {
                            "title": "Nebel",
                            "length": "4.54",
                            "description": "\n\tMutter is the third album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album's title means mother in German and is a reference to the band's song of the same name. Mutter has been well received by critics and was a commercial success, reaching number one in Germany, Austria, and Switzerland. It has since been certified platinum in several countries.\n "
                        }
                    ],
                    
                }
            ]
    },
    {
        "name": "Taylor Swift",
        "albums": [
            {
                "title": "Fearless",
                "songs": [
                    {
                        "title": "Fearless",
                        "length": "4.01",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Fifteen",
                        "length": "4.54",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Love Story",
                        "length": "3.55",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Hey Stephen",
                        "length": "4.14",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "White Horse",
                        "length": "3.55",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "You Belong with Me",
                        "length": "3.52",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Breathe",
                        "length": "4.23",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Tell Me Why",
                        "length": "3.20",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "You're Not Sorry",
                        "length": "4.22",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "The Way I Loved You",
                        "length": "4.04",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Forever & Always",
                        "length": "3.46",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "The Best Day",
                        "length": "4.05",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    },
                    {
                        "title": "Change",
                        "length": "4.40",
                        "description": "\n\tFearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album was a commercial success, topping the Billboard 200 for 11 non-consecutive weeks. It was also the best-selling album of 2009 in the United States. Fearless has been certified Diamond by the Recording Industry Association of America (RIAA) and has sold over 10 million copies worldwide. It won four Grammy Awards, including Album of the Year, making Swift the youngest recipient of the award at the time.\n "
                    }
                ],
                
            },
            {
                "title": "1989",
                "songs": [
                    {
                        "title": "Welcome to New York",
                        "length": "3.32",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Blank Space",
                        "length": "3.51",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Style",
                        "length": "3.51",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Out of the Woods",
                        "length": "3.55",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "All You Had to Do Was Stay",
                        "length": "3.13",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Shake It Off",
                        "length": "3.39",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "I Wish You Would",
                        "length": "3.27",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Bad Blood",
                        "length": "3.31",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Wildest Dreams",
                        "length": "3.40",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "How You Get the Girl",
                        "length": "4.07",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "This Love",
                        "length": "4.10",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "I Know Places",
                        "length": "3.15",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    },
                    {
                        "title": "Clean",
                        "length": "4.31",
                        "description": "\n\t1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. The album marked a departure from the country music that had been Swift's trademark sound, and is described as her evolution into pop music. 1989 received generally positive reviews from music critics and was a commercial success, debuting at number one on the Billboard 200 and selling over 1.28 million copies in its first week. It has since been certified 9× Platinum by the RIAA and has sold over 10 million copies worldwide.\n "
                    }
                ],
                
            }
        ]
        
    }



]
    


// Insert the songs into the 'songs' collection
data.forEach(artist => {
    artist.albums.forEach(album => {
        album.songs.forEach(song => {
            db.songs.insert({
                name: artist.name,
                album: album.title,
                song: song.title,
                length: parseFloat(song.length),
                description: song.description
            });
        });
    });
});
