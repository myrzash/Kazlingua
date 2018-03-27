const parts = [
    {
        name: 'Все обо мне 1',
        image: 'me_a.png',
        contents: [
            {
                // games: [
                //     // {name: 'rad', params: {id: 0}},
                //     // {name: 'rad', params: {id: 0,selectedWords:[0,1,2]}},
                //     // {name: 'rad', params: {id: 1}},
                //     // {name: 'inp', params: {id: 0}},
                //     // {name: 'inp', params: {id: 1}},
                //     // {name: 'sent', params: {id: 0, selectedSentences: [0, 2]}},
                //     // {name: 'sent', params: {id: 1}},
                //     // {name: 'rad', params: {id: 2}},
                //     // {name: 'rad', params: {id: 3}}
                //     {name: 'sent', params: {id: 0}},
                //     {name: 'list', params: {id: 1}},
                // ],
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: 'dop.mp3',
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: 'bala.mp3',
                        image: 'bala.png'
                    },
                    {
                        kz: 'Алма',
                        ru: 'Яблоко',
                        sound: 'alma.mp3',
                        image: 'alma.png'
                    },
                    {
                        kz: 'Ата',
                        ru: 'Дедушка',
                        sound: 'ata.mp3',
                        image: 'ata.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: 'ol.mp3',
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: 'men.mp3',
                        image: null,
                    }
                ],
                sentences: [
                    {
                        kz: 'бөлмені жинаймын',
                        ru: 'убираю комнату',
                        sound: 'bolmeni_zhinajmyn.mp3',
                        image: null,
                    },
                    {
                        kz: 'еден жуамын',
                        ru: 'мою полы',
                        sound: 'eden_zhuamyn.mp3',
                        image: null,
                    },
                    {
                        kz: 'бөлмемді жинаймын',
                        ru: 'убираю свою комнату',
                        sound: 'bolmemdi_zhinajmyn.mp3',
                        image: null,
                    }
                ],
                listens: [
                    {
                        kz: 'кітап сөресі',
                        // ru: 'книжный шкаф',
                        sound: 'kitap_soresi.mp3',
                        image: null,
                    },
                    {
                        kz: 'тест',
                        ru: 'книжный шкаф 2',
                        sound: 'kitap_soresi.mp3',
                        image: null,
                    }
                ],
            },
            {
                words: [
                    {
                        kz: 'Доп 2',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала 2',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            },
            {
                words: [
                    {
                        kz: 'Доп 3',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала 3',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Все обо мне 2',
        completed: 0,
        image: 'me_b.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Все обо мне 3',
        completed: 0,
        image: 'me_c.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Общие фразы',
        completed: 0,
        image: 'obshie_frazi.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Школа 1',
        completed: 0,
        image: 'm_a.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Школа 2',
        completed: 0,
        image: 'm_b.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Школа 3',
        completed: 0,
        image: 'm_c.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Школа 4',
        completed: 0,
        image: 'm_a.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Числа',
        completed: 0,
        image: 'chisla_icon.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Времена года',
        completed: 0,
        image: 'chisla_vremena_goda.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Семья',
        completed: 0,
        image: 'semya_icon.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Еда 1',
        completed: 0,
        image: 'eda_a.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Еда 2',
        completed: 0,
        image: 'eda_b.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Окружающий мир',
        completed: 0,
        image: 'korshaganorta.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Обычаи',
        completed: 0,
        image: 'tradici_icon.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Путешествие',
        completed: 0,
        image: 'sayahat_icon.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    },
    {
        name: 'Здоровье',
        completed: 0,
        image: 'zdorove.png',
        words: ["word1", "word2", "word3", "word4", "word5"],
        contents: [
            {
                words: [
                    {
                        kz: 'Доп',
                        ru: 'Мячь',
                        sound: null,
                        image: 'dop.png'
                    },
                    {
                        kz: 'Бала',
                        ru: 'Ребенок',
                        sound: null,
                        image: 'bala.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'ол',
                        ru: 'он, она',
                        sound: null,
                        image: null,
                    },
                    {
                        kz: 'мен',
                        ru: 'я',
                        sound: null,
                        image: null,
                    }
                ]
            }
        ]
    }
];

export default parts;