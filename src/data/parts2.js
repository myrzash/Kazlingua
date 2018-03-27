export default [
    {
        name: 'ӨЗІМ ТУРАЛЫ 1',
        image: '1.png',
        contents: [
            {
                title: 'Менің бөлмем 1',
                description: 'бөлме, сөре, төсек',
                words: [
                    {
                        kz: 'бөлме',
                        ru: 'комната',
                        image: 'bolme.png',
                        sound: 'bolme.mp3',
                    },
                    {
                        kz: 'сынып',
                        ru: 'класс',
                        image: 'synyp.png',
                        sound: 'synyp.mp3',
                    },
                    {
                        kz: 'терезе',
                        ru: 'окно',
                        image: 'tereze.png',
                        sound: 'tereze.mp3',
                    },
                    {
                        kz: 'есік',
                        ru: 'дверь',
                        image: 'esik.png',
                        sound: 'esik.mp3',
                    },
                    {
                        kz: 'мектеп',
                        ru: 'школа',
                        image: 'mektep.png',
                        sound: 'mektep.mp3',
                    },
                    {
                        kz: 'төсек',
                        ru: 'постель',
                        image: 'tosek.png',
                        sound: 'tosek.mp3',
                    },
                    {
                        kz: 'сөре',
                        ru: 'полка',
                        image: 'sore.png',
                        sound: 'sore.mp3',
                    }
                ],
                inputs: [
                    {
                        kz: 'кітап сөресі',
                        ru: 'книжная полка',
                        sound: 'kitap_soresi.mp3'
                    },
                    {
                        kz: 'менің бөлмемде',
                        ru: 'в моей комнате',
                        sound: 'mening_bolmemde.mp3'
                    },
                    {
                        kz: 'сенің бөлмеңде',
                        ru: 'в твоей комнате',
                        sound: 'sening_bolmende.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Менің бөлмемде төсек, кітап сөресі бар',
                        ru: 'В моей комнате есть кровать, книжная полка',
                        sound: 'mening_bolmemde_tosek_kitap_soresi_bar.mp3'
                    },
                    {
                        kz: 'Сенің бөлмеңде кітап сөресі бар ма ?',
                        ru: 'В твоей комнате есть книжная полка ?',
                        sound: 'sening_bolmengde_kitap_soresi_bar_ma.mp3'
                    },
                    {
                        kz: 'Да, в моей комнате есть книжная полка',
                        ru: 'Иә, менің бөлмемде кітап сөресі бар',
                        sound: 'ia_menin_bolmemde_kitap_soresi_bar.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'кітап сөресі',
                        // ru: 'книжный шкаф',
                        sound: 'kitap_soresi.mp3',
                        image: null
                    }
                ],
                multi: [
                    {
                        task: "В моей комнате есть кровать, книжная полка, стол, стул.",
                        right: ["Менің бөлмемде төсек, кітап сөресі, үстел, орындық бар."],
                        wrong: ["Менің бөлмемде дәптер, кітап, қалам бар.", "Менің бөлмемде ойыншық, үстел, орындық бар."]
                    }
                ]
            },
            {
                title: 'Менің бөлмем 2',
                description: 'кең, жарық, таза',
                inputs: [
                    {
                        kz: 'кең бөлме',
                        ru: 'просторная комната',
                        sound: 'keng_bolme.mp3',
                    },
                    {
                        kz: 'жарық бөлме',
                        ru: 'светлая комната',
                        sound: 'zharyq_bolme.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Менің бөлмем кең',
                        ru: 'Моя комната просторная',
                        sound: 'mening_bolmem_keng.mp3'
                    },
                    {
                        kz: 'Сенің бөлмең жарық па ?',
                        ru: 'Твоя комната светлая ?',
                        sound: 'sening_bolmeng_zharyq_pa.mp3'
                    },
                    {
                        kz: 'Сенің бөлмең таза',
                        ru: 'Твоя комната чистая',
                        sound: 'sening_bolmeng_taza.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'жарық',
                        sound: 'zharyq.mp3',
                        image: null
                    },
                    {
                        kz: 'кең бөлме',
                        sound: 'keng_bolme.mp3',
                        image: null
                    }
                ],
                multi: [
                    {
                        task: "Моя комната просторная, светлая, чистая.",
                        right: ["Менің бөлмем кең, жарық, таза."],
                        wrong: ["Сенің бөлмең кең, жарық, таза.", "Менің бөлмем кең, үлкен, жарық."]
                    },
                    {
                        task: "просторный",
                        right: ["кең"],
                        wrong: ["әдемі", "қысқа"]
                    },
                    {
                        task: "светлый",
                        right: ["жарық"],
                        wrong: ["кішкентай", "кең"]
                    },
                    {
                        task: "чистый",
                        right: ["таза"],
                        wrong: ["қысқа", "үлкен"]
                    }
                ]
            },
            {
                title: 'Менің бөлмем 3',
                description: 'жинаймын, сүртемін, шаң, еден',
                words: [
                    {
                        kz: 'жинаймын',
                        ru: 'убираю',
                        image: 'zhinajmyn.png',
                        sound: 'zhinajmyn.mp3'
                    },
                    {
                        kz: 'сүртемін',
                        ru: 'вытираю',
                        image: 'surtemin.png',
                        sound: 'surtemin.mp3'
                    },
                    {
                        kz: 'еден',
                        ru: 'пол',
                        image: 'eden.png',
                        sound: 'eden.mp3'
                    },
                    {
                        kz: 'шаң',
                        ru: 'пыль',
                        image: 'shang.png',
                        sound: 'shang.mp3'
                    },
                    {
                        kz: 'үстел',
                        ru: 'стол',
                        image: 'ustel.png',
                        sound: 'ustel.mp3'
                    },
                    {
                        kz: 'жуамын',
                        ru: 'мою',
                        image: 'zhuamyn.png',
                        sound: 'zhuamyn.mp3'
                    },
                    {
                        kz: 'жазамын',
                        ru: 'пишу',
                        image: 'zhazamyn.png',
                        sound: 'zhazamyn.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'бөлмені жинаймын',
                        ru: 'убираю комнату',
                        sound: 'bolmeni_zhinajmyn.mp3'
                    },
                    {
                        kz: 'еден жуамын',
                        ru: 'мою полы',
                        sound: 'eden_zhuamyn.mp3'
                    },
                    {
                        kz: 'бөлмемді жинаймын',
                        ru: 'убираю свою комнату',
                        sound: 'bolmemdi_zhinajmyn.mp3'
                    },
                ],
                sentences: [
                    {
                        kz: 'Терезенің шаңын сүртемін',
                        ru: 'Вытираю пыль с окна',
                        sound: 'terezenin_shaqyn_surtemin.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'сүртемін',
                        sound: 'surtemin.mp3',
                        image: null
                    },
                    {
                        kz: 'шаң',
                        sound: 'shang.mp3',
                        image: null
                    }
                ],
                multi: [
                    {
                        task: "Я вытираю пыль, ты мой полы.",
                        right: ["Мен шаң сүртемін, сен еден жу."],
                        wrong: ["Мен шаң сүртемін.", "Сен еден жу."]
                    }
                ]
            }
        ]
    },
    {
        name: 'ӨЗІМ ТУРАЛЫ 2',
        image: '3.png',
        contents: [
            {
                title: 'Cүйікті ісім',
                description: 'билеймін, бояймын, домбыра тартамын',
                words: [
                    {
                        kz: 'билеймін',
                        ru: 'танцую',
                        image: 'bilejmin.png',
                        sound: 'bilejmin.mp3'
                    },
                    {
                        kz: 'сызамын',
                        ru: 'черчу',
                        image: 'syzamyn.png',
                        sound: 'syzamyn.mp3'
                    },
                    {
                        kz: 'ойнаймын',
                        ru: 'играю',
                        image: 'ojnajmyn.png',
                        sound: 'ojnajmyn.mp3'
                    },
                    {
                        kz: 'секіремін',
                        ru: 'прыгаю',
                        image: 'sekiremin.png',
                        sound: 'sekiremin.mp3'
                    },
                    {
                        kz: 'бояймын',
                        ru: 'крашу',
                        image: 'boyajmyn.png',
                        sound: 'boyajmyn.mp3'
                    },
                    {
                        kz: 'жинаймын',
                        ru: 'убираю',
                        image: 'zhinajmyn.png',
                        sound: 'zhinajmyn.mp3'
                    },
                    {
                        kz: 'өшіремін',
                        ru: 'выключаю',
                        image: 'oshiremin.png',
                        sound: 'oshiremin.mp3'
                    },
                    {
                        kz: 'домбыра тартамын',
                        ru: 'играю на домбре',
                        image: 'dombyra_tartamyn.png',
                        sound: 'dombyra_tartamyn.mp3'
                    },
                    {
                        kz: 'ән айтамын',
                        ru: 'пою',
                        image: 'an_ajtamyn.png',
                        sound: 'an_ajtamyn.mp3'
                    },
                    {
                        kz: 'сурет саламын',
                        ru: 'рисую',
                        image: 'suret_salamyn.png',
                        sound: 'suret_salamyn.mp3'
                    },
                    {
                        kz: 'шаңғы тебемін',
                        ru: 'катаюсь на лыжах',
                        image: 'shangy_tebemin.png',
                        sound: 'shangy_tebemin.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'би билеймін',
                        ru: 'танцую',
                        sound: 'bi_bilejmin.mp3'
                    }, {
                        kz: 'домбыра тартамын',
                        ru: 'играю на домбре',
                        sound: 'dombyra_tartamyn.mp3'
                    }, {
                        kz: 'сурет саламын',
                        ru: 'рисую',
                        sound: 'suret_salamyn.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Мен жапырақты жасыл қарындашпен бояймын.',
                        ru: 'Я раскрашу лист зеленым карандашом.',
                        sound: 'men_zhapyraqty_zhasyl_qaryndashpen_boyajmyn.mp3'
                    }, {
                        kz: 'Мен домбыра тартамын.',
                        ru: 'Я играю на домбре.',
                        sound: 'men_dombyra_tartamyn.mp3'
                    }
                ],
                listens: [
                    {
                        kz: '"бояймын',
                        sound: 'boyajmyn.mp3'
                    }, {
                        kz: '"билеймін',
                        sound: 'bilejmin.mp3'
                    }
                ],
                multi: [
                    {
                        task: "Я хорошо танцую.",
                        right: ["Мен жақсы билеймін."],
                        wrong: ["Мен домбыра тартамын.", "Мен сурет саламын."]
                    }
                ]
            },
            {
                title: 'Мекенжай',
                description: 'көше, пәтер, алдында, артында, жанында, тұрамын',
                words: [
                    {
                        kz: 'көше',
                        ru: 'улица',
                        image: 'koshe.png',
                        sound: 'koshe.mp3'
                    },
                    {
                        kz: 'қала',
                        ru: 'город',
                        image: 'kala.png',
                        sound: 'kala.mp3'
                    },
                    {
                        kz: 'асхана',
                        ru: 'столовая',
                        image: 'ashana.png',
                        sound: 'ashana.mp3'
                    },
                    {
                        kz: 'кітапхана',
                        ru: 'библиотека',
                        image: 'kitaphana.png',
                        sound: 'kitaphana.mp3'
                    },
                    {
                        kz: 'пәтер',
                        ru: 'квартира',
                        image: 'pater.png',
                        sound: 'pater.mp3'
                    },
                    {
                        kz: 'бөлме',
                        ru: 'комната',
                        image: 'bolme.png',
                        sound: 'bolme.mp3'
                    },
                    {
                        kz: 'сынып',
                        ru: 'класс',
                        image: 'synyp.png',
                        sound: 'synyp.mp3'
                    },
                    {
                        kz: 'дәріхана',
                        ru: 'аптека',
                        image: 'darihana.png',
                        sound: 'darihana.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'пәтер алдында',
                        ru: 'перед квартирой',
                        sound: 'pater_aldinda.mp3'
                    }, {
                        kz: 'тұрамын',
                        ru: 'живу',
                        sound: 'turamyn.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'кең көше',
                        ru: 'широкая улица',
                        sound: 'keng_koshe.mp3'
                    }, {
                        kz: 'Мектептің артында стадион бар.',
                        ru: 'За школой есть стадион.',
                        sound: 'mektepting_artynda_stadion_bar.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'көше',
                        sound: 'koshe.mp3'
                    }
                ],
                multi: [
                    {
                        task: "Я живу возле школы.",
                        right: ["Мектептің жанында тұрамын."],
                        wrong: ["Мектептің артында тұрамын.", "Мектептің алдында тұрамын."]
                    },
                    {
                        task: "перед (предлог)",
                        right: ['алдында'],
                        wrong: ['көше', 'пәтер']
                    },
                    {
                        task: "за (предлог)",
                        right: ['артында'],
                        wrong: ['үй', 'мектеп']
                    },
                    {
                        task: "возле, около",
                        right: ['жанында'],
                        wrong: ['стадион', 'асхана']
                    }
                ]
            },
            {
                title: 'Қайталау 1',
                inputs: [
                    {
                        kz: 'бөлмені жинаймын',
                        ru: 'убираю комнату',
                        sound: 'bolmeni_zhinajmyn.mp3'
                    }, {
                        kz: 'ән саламын',
                        ru: 'пою',
                        sound: 'an_salamyn.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Мен мектептің жанында тұрамын.',
                        ru: 'Я живу возле школы.',
                        sound: 'men_mektepting_zhanynda_turamyn.mp3'
                    }, {
                        kz: 'Мектептің артында стадион бар.',
                        ru: 'За школой есть стадион.',
                        sound: 'mektepting_artynda_stadion_bar.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'пәтер',
                        sound: 'pater.mp3'
                    }, {
                        kz: 'шаң сүртемін',
                        sound: 'shang_surtemin.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'перед (предлог)',
                        right: ['алдында'],
                        wrong: ['сынып', 'бөлме']
                    }, {
                        task: 'за (предлог)',
                        right: ['артында'],
                        wrong: ['үстел', 'жанында']
                    }, {
                        task: 'Где ты живешь?',
                        right: ['Сен қайда тұрасың?'],
                        wrong: ['Сен қайда болдың?', 'Ол қайда тұрады?']
                    }, {
                        task: 'Мектептің артында не бар?',
                        right: ['Что есть за школой?'],
                        wrong: ['Что есть за домом?', 'Что есть возле школы?']
                    }, {
                        task: 'Перед домом растут цветы.',
                        right: ['Үйдің алдында гүл өседі.'],
                        wrong: ['Үйдің алдында ағаш өседі.', 'Үйдің жанында гүл өседі.']
                    }
                ]
            }
        ]
    },
    {
        name: 'МЕНІҢ ОТБАСЫМ ЖӘНЕ ДОСТАРЫМ',
        image: '11.png',
        contents: [
            {
                title: "Ата-әжем",
                description: "ауыл, мейірімді, сыйлы, демалыс",
                words: [
                    {
                        kz: 'қала',
                        ru: 'город',
                        image: 'kala.png',
                        sound: 'kala.mp3'
                    },
                    {
                        kz: 'асхана',
                        ru: 'столовая',
                        image: 'ashana.png',
                        sound: 'ashana.mp3'
                    },
                    {
                        kz: 'есік',
                        ru: 'дверь',
                        image: 'esik.png',
                        sound: 'esik.mp3',
                    },
                    {
                        ru: 'aул',
                        kz: 'ауыл',
                        image: 'auyl.png',
                        sound: 'auyl.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'демалыс',
                        ru: 'каникулы',
                        sound: 'demalys.mp3'
                    }, {
                        kz: 'сыйлы',
                        ru: 'уважаемый',
                        sound: 'syjly.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Демалыста ауылға барамын.',
                        ru: 'На каникулах поеду в аул.',
                        sound: 'demalysta_auylga_baramyn.mp3'
                    }, {
                        kz: 'Менің әжем мейірімді.',
                        ru: 'Моя бабушка добрая.',
                        sound: 'mening_azhem_mejrimdi.mp3'
                    }, {
                        kz: 'Атам мен әжем ауылда тұрады.',
                        ru: 'Мои дедушка и бабушка живут в ауле.',
                        sound: 'atam_men_azhem_auylda_turady.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'мейірімді',
                        sound: 'mejrimdi.mp3'
                    }, {
                        kz: 'сыйлы',
                        sound: 'syjly.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'добрая',
                        right: ['мейірімді'],
                        wrong: ['кітап', 'сынып']
                    },
                    {
                        task: 'Мой дедушка-уважаемый человек',
                        right: ['Атам-сыйлы адам.'],
                        wrong: ['Атам-мейірімді адам.', 'Атам-жақсы адам.']
                    },
                    {
                        task: 'Жазда ауылға барамын',
                        right: ['Летом я поеду в аул.'],
                        wrong: ['Летом я поеду в город.', 'Летом я поеду на жайлау.']
                    }
                ]
            },
            {
                title: "Достарым",
                description: "дос, достар, көңілді, аула",
                words: [
                    {
                        ru: 'друзья',
                        kz: 'достар',
                        image: 'dostar.png',
                        sound: 'dostar.mp3'
                    }, {
                        ru: 'семья',
                        kz: 'отбасы',
                        image: 'otbasy.png',
                        // sound: 'otbasy.mp3'
                    }, {
                        ru: 'дедушка и бабушка',
                        kz: 'ата-әже',
                        image: 'ata_azhe.png',
                        // sound: 'ata_azhe.mp3'
                    }, {
                        ru: 'игрушки',
                        kz: 'ойыншықтар',
                        image: 'ojynshyqtar.png',
                        // sound: 'ojynshyqtar.mp3'
                    }, {
                        ru: 'двор',
                        kz: 'аула',
                        image: 'aula.png',
                        sound: 'aula.mp3'
                    }, {
                        ru: 'aул',
                        kz: 'ауыл',
                        image: 'auyl.png',
                        sound: 'auyl.mp3'
                    }, {
                        ru: 'школа',
                        kz: 'мектеп',
                        image: 'mektep.png',
                        sound: 'mektep.mp3'
                    }, {
                        ru: 'комната',
                        kz: 'бөлме',
                        image: 'bolme.png',
                        sound: 'bolme.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'көңілді достар',
                        ru: 'веселые друзья',
                        sound: 'kongildi_dostar.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Мен аулада ойнаймын.',
                        ru: 'Я играю во дворе.',
                        sound: 'men_aulada_ojnajmyn.mp3'
                    }, {
                        kz: 'Менің досым көп.',
                        ru: 'У меня много друзей.',
                        sound: 'mening_dosym_kop.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'көңілді',
                        sound: 'kongildi.mp3'
                    }, {
                        kz: 'асық',
                        sound: 'asyq.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'веселый',
                        right: ['көңілді'],
                        wrong: ['мейірімді', 'үлкен']
                    },
                    {
                        task: 'Я играю во дворе с друзьями.',
                        right: ['Мен достарыммен аулада ойнаймын.'],
                        wrong: ['Мен ойнаймын.', 'Мен ауылға барамын.']
                    },
                    {
                        task: 'Во дворе с друзьями играю в асыки.',
                        right: ['Аулада достарыммен асық ойнаймын.'],
                        wrong: ['Үйде ойнаймын.', 'Мен ауылға барамын.']
                    }
                ]
            },
            {
                title: "Туған күн",
                description: "тойладық, сыйлық, туған күн",
                words: [
                    {
                        ru: 'кукла',
                        kz: 'қуыршақ',
                        image: 'quyrshak.png',
                        sound: 'quyrshak.mp3'
                    }, {
                        ru: 'книга',
                        kz: 'кітап',
                        image: 'kitap.png',
                        sound: 'kitap.mp3'
                    }, {
                        ru: 'игрушка',
                        kz: 'ойыншық',
                        image: 'ojynshyq.png',
                        // sound: 'ojynshyq.mp3'
                    }, {
                        ru: 'подарок',
                        kz: 'сыйлық',
                        image: 'syjlyq.png',
                        sound: 'syjlyq.mp3'
                    }, {
                        ru: 'цветок',
                        kz: 'гүл',
                        image: 'gul.png',
                        sound: 'gul.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'тойладық',
                        ru: 'праздновали',
                        sound: 'tojladyq.mp3'
                    }, {
                        kz: 'сыйлық',
                        ru: 'подарок',
                        sound: 'syjlyq.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Досымның туған күні',
                        ru: 'День рождения друга',
                        sound: 'dosymnyng_tugan_kunu.mp3'
                    }, {
                        kz: 'Достарым туған күніме келді.',
                        ru: 'Друзья пришли на мой день рождения.',
                        sound: 'dostarym_tugan_kunume_keldi.mp3'
                    }, {
                        kz: 'Досыма сыйлығым ұнады.',
                        ru: 'Другу понравился мой подарок.',
                        sound: 'dosyma_syjlygym_unady.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'сыйлық',
                        sound: 'syjlyq.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'день рождения',
                        right: ['туған күн'],
                        wrong: ['демалыс күн', 'қайырлы күн']
                    }, {
                        task: 'Туған күнге барамын.',
                        right: ['Пойду на день рождения.'],
                        wrong: ['Приду на день рождения.', 'День рождения друга.']
                    }, {
                        task: 'Праздновали день рождения.',
                        right: ['Туған күн тойладық.'],
                        wrong: ['Туған күнге барамын.', 'Туған күнге келдім.']
                    }
                ]
            },
            {
                title: 'Қайталау 2',
                words: [{
                    ru: 'игрушка',
                    kz: 'ойыншық',
                    image: 'ojynshyq.png',
                    // sound: 'ojynshyq.mp3'
                }, {
                    ru: 'подарок',
                    kz: 'сыйлық',
                    image: 'syjlyq.png',
                    sound: 'syjlyq.mp3'
                }, {
                    ru: 'цветок',
                    kz: 'гүл',
                    image: 'gul.png',
                    sound: 'gul.mp3'
                }, {
                    ru: 'двор',
                    kz: 'аула',
                    image: 'aula.png',
                    sound: 'aula.mp3'
                }, {
                    ru: 'комната',
                    kz: 'бөлме',
                    image: 'bolme.png',
                    sound: 'bolme.mp3'
                }, {
                    kz: 'сынып',
                    ru: 'класс',
                    image: 'synyp.png',
                    sound: 'synyp.mp3',
                }, {
                    kz: 'көше',
                    ru: 'улица',
                    image: 'koshe.png',
                    sound: 'koshe.mp3',
                }
                ],
                inputs: [
                    {
                        kz: 'сыйлы адам',
                        ru: 'уважаемый человек',
                        sound: 'syjly_adam.mp3'
                    }, {
                        kz: 'атамның ауылында',
                        ru: 'в ауле дедушки',
                        sound: 'atamnyng_aulynda.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'көңілді туған күн',
                        ru: 'веселое день рождения',
                        sound: 'kongildi_tugan_kun.mp3'
                    }, {
                        kz: 'Әжемді жақсы көремін.',
                        ru: 'Я люблю свою бабушку.',
                        sound: 'azhemdi_zhaqsy_koremin.mp3'
                    }, {
                        kz: 'Демалыста ата-әжеме барамын.',
                        ru: 'На каникулах поеду к дедушке и бабушке.',
                        sound: 'demalysta_ata_azheme_baramyn.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'қарындас',
                        sound: 'karindas.mp3'
                    }, {
                        kz: 'мейірімді',
                        sound: 'mejrimdi.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Праздновали день рождения.',
                        right: ['Туған күнді тойладық.'],
                        wrong: ['Туған күнге келді.', 'Туған күнімен құттықтадым.']
                    },
                    {
                        task: 'Во дворе играл с друзьями.',
                        right: ['Аулада достарыммен ойнадым.'],
                        wrong: ['Үйде ініммен ойнадым.', 'Аулада достарыммен отырдым.']
                    }
                ]
            }
        ]
    },
    {
        name: 'МЕНІҢ МЕКТЕБІМ',
        image: '6.png',
        contents: [
            {
                title: "Cан есім",
                description: "күн, бірінші, алтыншы, басталады",
                words: [
                    {
                        ru: 'первый',
                        kz: 'бірінші',
                        image: 'birinshi.png',
                        sound: 'birinshi.mp3'
                    }, {
                        ru: 'четвертый',
                        kz: 'төртінші',
                        image: 'tortinshi.png',
                        sound: 'tortinshi.mp3'
                    }, {
                        ru: 'третий',
                        kz: 'үшінші',
                        image: 'ushinshi.png',
                        sound: 'ushinshi.mp3'
                    }, {
                        ru: 'шестой',
                        kz: 'алтыншы',
                        image: 'altynshy.png',
                        sound: 'altynshy.mp3'
                    }
                ],
                inputs: [
                    {
                        kz: 'сабақ',
                        ru: 'урок',
                        sound: 'sabaq.mp3'
                    }, {
                        kz: 'басталады',
                        ru: 'начинается',
                        sound: 'bastalady.mp3'
                    }, {
                        kz: 'төртінші күн',
                        ru: 'четвертый день',
                        sound: 'tortinshi_kun.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Екінші сабақ сағат онда басталады.',
                        ru: 'Второй урок начинается в десять часов.',
                        sound: 'ekinshi_sabaq_sagat_onda_bastalady.mp3'
                    }, {
                        kz: 'Ол бірінші келді.',
                        ru: 'Он пришел первым.',
                        sound: 'ol_birinshi_keldi.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'үшінші',
                        sound: 'ushinshi.mp3'
                    }, {
                        kz: 'тоғызыншы',
                        sound: 'togyzynshy.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Он приехал на третий день.',
                        right: ['Ол үшінші күні келді.'],
                        wrong: ['Ол бесінші күні келді.', 'Ол төртінші күні келді.']
                    },
                    {
                        task: 'Я живу в шестом доме.',
                        right: ['Мен алтыншы үйде тұрамын.'],
                        wrong: ['Мен жетінші үйде тұрамын.', 'Мен бесінші үйде тұрамын.']
                    },
                    {
                        task: 'Брат учится в восьмом классе.',
                        right: ['Ағам сегізінші сыныпта оқиды.'],
                        wrong: ['Ағам оныншы сыныпта оқиды.', 'Әпкем сегізінші сыныпта оқиды.']
                    }
                ]
            },
            {
                title: "Апта күндері",
                description: "апта, дүйсенбі, сейсенбі, сәрсенбі, бейсенбі, жұма",
                words: [
                    {
                        ru: 'понедельник',
                        kz: 'дүйсенбі',
                        sound: 'dujsenbi.mp3',
                        image: 'dujsenbi.png'
                    }, {
                        ru: 'вторник',
                        kz: 'сейсенбі',
                        sound: 'sejsenbi.mp3',
                        image: 'sejsenbi.png'
                    }, {
                        ru: 'среда',
                        kz: 'сәрсенбі',
                        sound: 'sarsenbi.mp3',
                        image: 'sarsenbi.png'
                    }, {
                        ru: 'четверг',
                        kz: 'бейсенбі',
                        sound: 'bejsenbi.mp3',
                        image: 'bejsenbi.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'сейсенбі',
                        ru: 'вторник',
                        sound: 'sejsenbi.mp3'
                    }, {
                        kz: 'сәрсенбі',
                        ru: 'среда',
                        sound: 'sarsenbi.mp3'
                    }, {
                        kz: 'бейсенбі',
                        ru: 'четверг',
                        sound: 'bejsenbi.mp3'
                    }, {
                        kz: 'апта',
                        ru: 'неделя',
                        sound: 'apta.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Дүйсенбіде сабақ басталады.',
                        ru: 'В понедельник начинаются уроки.',
                        sound: 'dujsenbide_sabaq_bastalady.mp3'
                    }, {
                        kz: 'Сәрсенбіде туған күнге барамын.',
                        ru: 'В среду пойду на день рождения.',
                        sound: 'sarsenbide_tugan_kunge_baramyn.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'жұма',
                        sound: 'zhuma.mp3'
                    }, {
                        kz: 'дүйсенбі',
                        sound: 'dujsenbi.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'В неделе семь дней.',
                        right: ['Аптада жеті күн бар.'],
                        wrong: ['Аптада бес күн бар.', 'Аптаның жетінші күні.']
                    }
                ]
            },
            {
                title: "Апта күндері",
                description: "сенбі, жексенбі, демалыс",
                words: [
                    {
                        ru: 'четверг',
                        kz: 'бейсенбі',
                        sound: 'bejsenbi.mp3',
                        image: 'bejsenbi.png'
                    }, {
                        ru: 'пятница',
                        kz: 'жұма',
                        sound: 'zhuma.mp3',
                        image: 'zhuma.png'
                    }, {
                        ru: 'суббота',
                        kz: 'сенбі',
                        sound: 'senbi.mp3',
                        image: 'senbi.png'
                    }, {
                        ru: 'воскресенье',
                        kz: 'жексенбі',
                        sound: 'zheksenbi.mp3',
                        image: 'zheksenbi.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'демалыс',
                        ru: 'demalys',
                        sound: 'tojladyq.mp3'
                    }, {
                        kz: 'коньки тептік',
                        ru: 'катались на коньках',
                        sound: 'konki_teptik.mp3'
                    }, {
                        kz: 'болады',
                        ru: 'будет',
                        sound: 'bolady.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Сенбі, жексенбі - демалыс.',
                        ru: 'Суббота, воскресенье - выходной. ',
                        sound: 'senbi_zheksenbi_demalys.mp3'
                    }, {
                        kz: 'Бейсенбіде бес сабақ болады.',
                        ru: 'В четверг пять уроков.',
                        sound: 'bejsenbide_bes_sabaq_bolady.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'сенбі',
                        sound: 'senbi.mp3'
                    }, {
                        kz: 'жексенбі',
                        sound: 'zheksenbi.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'В субботу пойдем в горы.',
                        right: ['Сенбіде тауға барамыз.'],
                        wrong: ['Сәрсенбіде тауға барамыз.', 'Сенбіде орманға барамын.']
                    }, {
                        task: 'В воскресенье  с семьей катались на коньках.',
                        right: ['Жексенбіде отбасыммен коньки тептік.'],
                        wrong: ['Сенбіде отбасыммен коньки тептік.', 'Жексенбіде отбасыммен шаңғы тептік.']
                    }
                ]
            },
            {
                title: "Пән атаулары",
                description: "қазақ тілі, әдебиет, дүниетану, еңбек, денешынықтыру, оған",
                words: [
                    {
                        ru: 'казахский язык',
                        kz: 'қазақ тілі',
                        sound: 'qazaq_tili.mp3',
                        image: 'qazaq_tili.png'
                    },
                    {
                        ru: 'труд',
                        kz: 'еңбек',
                        sound: 'engbek.mp3',
                        image: 'engbek.png'
                    },
                    {
                        ru: 'познание мира',
                        kz: 'дүниетану',
                        sound: 'dunietanu.mp3',
                        image: 'dunietanu.png'
                    },
                    {
                        ru: 'физкультура',
                        kz: 'денешынықтыру',
                        sound: 'deneshynyqtyru.mp3',
                        image: 'deneshynyqtyru.png'
                    },
                    {
                        ru: 'литература',
                        kz: 'әдебиет',
                        sound: 'adebiet.mp3',
                        image: 'adebiet.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'қазақ тілі сабағы',
                        ru: 'урок казахского языка',
                        sound: 'qazaq_tili_sabagy.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Саған қандай сабақ ұнайды?',
                        ru: 'Какой урок тебе нравится?',
                        sound: 'sagan_qandaj_sabaq_unajdy.mp3'
                    }, {
                        kz: 'Маған қазақ тілі сабағы ұнайды.',
                        ru: 'Мне нравится урок казахского языка.',
                        sound: 'magan_qazaq_tili_sabagy_unajdy.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'дүниетану',
                        sound: 'dunietanu.mp3'
                    }, {
                        kz: 'еңбек',
                        sound: 'engbek.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Ему нравится урок физкультуры.',
                        right: ['Оған денешынықтыру сабағы ұнайды.'],
                        wrong: ['Маған денешынықтыру сабағы ұнайды.', 'Саған денешынықтыру сабағы ұнайды.']
                    }
                ]

            },
            {
                title: "Қайталау 3",
                words: [
                    {
                        ru: 'четверг',
                        kz: 'бейсенбі',
                        sound: 'bejsenbi.mp3',
                        image: 'bejsenbi.png'
                    }, {
                        ru: 'пятница',
                        kz: 'жұма',
                        sound: 'zhuma.mp3',
                        image: 'zhuma.png'
                    }, {
                        ru: 'суббота',
                        kz: 'сенбі',
                        sound: 'senbi.mp3',
                        image: 'senbi.png'
                    }, {
                        ru: 'воскресенье',
                        kz: 'жексенбі',
                        sound: 'zheksenbi.mp3',
                        image: 'zheksenbi.png'
                    }
                ],
                inputs: [
                    {
                        kz: 'демалыс күні',
                        ru: 'выходной день',
                        sound: 'demalys_kuni.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Дүйсенбіде бірінші сабақ - дүниетану.',
                        ru: 'В понедельник первый урок - познание мира.',
                        sound: 'duisenbide_birinshi_sabaq_dunietanu.mp3'
                    }, {
                        kz: 'Сейсенбіде кітапханаға барамын.',
                        ru: 'Во вторник пойду в библиотеку.',
                        sound: 'sejsenbide_kitaphanaga_baramyn.mp3'
                    }, {
                        kz: 'Бассейнге ол бейсенбіде барады.',
                        ru: 'В бассейн он пойдет в четверг.',
                        sound: 'basejnge_ol_bejsenbide_barady.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'сейсенбі',
                        sound: 'sejsenbi.mp3'
                    }, {
                        kz: 'әдебиет',
                        sound: 'adebiet.mp3'
                    }, {
                        kz: 'мейірімді',
                        sound: 'mejrimdi.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'В среду будет урок литературы.',
                        right: ['Сәрсенбіде әдебиет сабағы болады.'],
                        wrong: ['Сейсенбіде әдебиет сабағы болады.', 'Бейсенбіде әдебиет сабағы болады.']
                    },

                    {
                        task: 'Седьмой день - воскресенье.',
                        right: ['Жетінші күн - жексенбі.'],
                        wrong: ['Үшінші күн - жексенбі.', 'Жетінші күн - бейсенбі.']
                    }
                ]
            }
        ]
    },
    {
        name: 'МЕНІҢ ТУҒАН ЕЛІМ',
        image: '14.png',
        contents: [
            {
                title: "Туған елім",
                description: "туған жер, өзен, дала, табиғат, тамаша",
                words: [
                    {
                        ru: 'река',
                        kz: 'өзен',
                        sound: 'ozen.mp3',
                        image: 'ozen.png'
                    },
                    {
                        ru: 'озеро',
                        kz: 'көл',
                        sound: 'kol.mp3',
                        image: 'kol.png'
                    },
                    {
                        ru: 'вода',
                        kz: 'су',
                        sound: 'su.mp3',
                        image: 'su.png'
                    },
                    {
                        ru: 'снег',
                        kz: 'қар',
                        sound: 'qar.mp3',
                        image: 'qar.png'
                    },
                    {
                        ru: 'степь',
                        kz: 'дала',
                        sound: 'dala.mp3',
                        image: 'dala.png'
                    },
                    {
                        ru: 'гора',
                        kz: 'тау',
                        sound: 'tau.mp3',
                        image: 'tau.png'
                    },
                    {
                        ru: 'лес',
                        kz: 'орман',
                        sound: 'orman.mp3',
                        image: 'orman.png'
                    },
                    {
                        ru: 'город',
                        kz: 'қала',
                        sound: 'qala.mp3',
                        image: 'qala.png'
                    },
                    {
                        ru: 'природа',
                        kz: 'табиғат',
                        sound: 'tabigat.mp3',
                        image: 'tabigat.png'
                    },
                    {
                        ru: 'сумка',
                        kz: 'сөмке',
                        sound: null,
                        image: 'somke.png'
                    },
                    {
                        ru: 'полка',
                        kz: 'сөре',
                        sound: 'sore.mp3',
                        image: 'sore.png'
                    },
                    {
                        ru: 'школа',
                        kz: 'мектеп',
                        sound: 'mektep.mp3',
                        image: 'mektep.png'
                    }],
                inputs: [
                    {
                        kz: 'туған жер',
                        ru: 'родная земля',
                        sound: 'tugan_zher.mp3'
                    }, {
                        kz: 'дала',
                        ru: 'степь',
                        sound: 'dala.mp3'
                    }
                ],
                sentences: [
                    {
                        kz: 'Туған жерім тамаша!',
                        ru: 'Прекрасна моя родная земля!',
                        sound: 'tugan_zherim_tamasha.mp3'
                    }, {
                        kz: 'Ауылда өзен бар ма ?!',
                        ru: 'В ауле есть река ?',
                        sound: 'auylda_ozen_bar_ma.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'тамаша',
                        sound: 'tamasha.mp3'
                    }, {
                        kz: 'өзен',
                        sound: 'ozen.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'В степи растут цветы.',
                        right: ['Далада гүл өседі.'],
                        wrong: ['Далада ағаш өседі.', 'Бақта жеміс өседі.']
                    }, {
                        task: 'В ауле есть река.',
                        right: ['Ауылда өзен бар.'],
                        wrong: ['Өзенде балық бар.', 'Мен балық жедім.']
                    }
                ]
            },
            {
                title: "Елорда",
                description: "елорда, мақтанамын, әсем",
                words: [{
                    ru: 'столица',
                    kz: 'елорда',
                    sound: 'elorda.mp3',
                    image: 'elorda.png'
                },
                    {
                        ru: 'спортзал',
                        kz: 'спортзал',
                        sound: null,
                        image: 'sportzal.png'
                    },
                    {
                        ru: 'бассейн',
                        kz: 'бассейн',
                        sound: null,
                        image: 'bassejn.png'
                    },
                    {
                        ru: 'дом',
                        kz: 'үй',
                        sound: null,
                        image: 'ui.png'
                    },
                    {
                        ru: 'город',
                        kz: 'қала',
                        sound: 'qala.mp3',
                        image: 'qala.png'
                    },
                    {
                        ru: 'гора',
                        kz: 'тау',
                        sound: 'tau.mp3',
                        image: 'tau.png'
                    },
                    {
                        ru: 'птица',
                        kz: 'құс',
                        sound: null,
                        image: 'qus.png'
                    },
                    {
                        ru: 'река',
                        kz: 'өзен',
                        sound: 'ozen.mp3',
                        image: 'ozen.png'
                    },
                    {
                        ru: 'природа',
                        kz: 'табиғат',
                        sound: 'tabigat.mp3',
                        image: 'tabigat.png'
                    },
                    {
                        ru: 'игрушка',
                        kz: 'ойыншық',
                        sound: null,
                        image: 'ojynshyq.png'
                    },
                    {
                        ru: 'кукла',
                        kz: 'қуыршақ',
                        sound: 'quyrshak.mp3',
                        image: 'quyrshak.png'
                    },
                    {
                        ru: 'машина',
                        kz: 'мәшине',
                        sound: 'mashine.mp3',
                        image: 'mashine.png'
                    }],
                sentences: [
                    {
                        ru: 'Какой город Астана ?',
                        kz: 'Астана қандай қала ?',
                        sound: 'astana_qandaj_qala.mp3'
                    },
                    {
                        ru: 'Астана - красивый город.',
                        kz: 'Астана - әсем қала.',
                        sound: 'astana_asem_qala.mp3'
                    },
                ],
                inputs: [
                    {
                        ru: 'горжусь',
                        kz: 'мақтанамын',
                        sound: 'maqtanamyn.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'мақтанамын',
                        sound: 'maqtanamyn.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Я горжусь Астаной!',
                        right: ['Мен Астанамен мақтанамын!'],
                        wrong: ['Мен Астананы жақсы көремін!', 'Мен Астананы әнге қосамын!']
                    }, {
                        task: 'Мне нравится Астана.',
                        right: ['Астана маған ұнайды.'],
                        wrong: ['Астана - әсем қала.', 'Астанада мәшине көп.']
                    }
                ]
            },
            {
                title: "Менің қалам",
                description: "сауда орталығы, орталық, оқушылар сарайы, болды",
                words: [
                    {
                        ru: 'торговый центр',
                        kz: 'сауда орталығы',
                        sound: 'sauda_ortalygy.mp3',
                        image: 'sauda_ortalygy.png'
                    },
                    {
                        ru: 'школа',
                        kz: 'мектеп',
                        sound: 'mektep.mp3',
                        image: 'mektep.png'
                    },
                    {
                        ru: 'дом',
                        kz: 'үй',
                        sound: null,
                        image: 'ui.png'
                    },
                    {
                        ru: 'столовая',
                        kz: 'асхана',
                        sound: 'ashana.mp3',
                        image: 'ashana.png'
                    },
                    {
                        ru: 'дворец школьников',
                        kz: 'оқушылар сарайы',
                        sound: 'oqushylar_sarajy.mp3',
                        image: 'oqushylar_sarajy.png'
                    },
                    {
                        ru: 'двор',
                        kz: 'аула',
                        sound: 'aula.mp3',
                        image: 'aula.png'
                    }],
                sentences: [
                    {
                        ru: 'Я живу в центре города.',
                        kz: 'Мен қала орталығында тұрамын.',
                        sound: 'men_qala_ortalygynda_turamyn.mp3'
                    },
                    {
                        ru: 'За домом есть торговый центр.',
                        kz: 'Үйдің артында сауда орталығы бар.',
                        sound: 'ujding_artynda_sauda_ortalygy_bar.mp3'
                    },
                    {
                        ru: 'Где ты был утром ?',
                        kz: 'Сен таңертең қайда болдың ?',
                        sound: 'sen_tangerten_kajda_boldyng.mp3'
                    },
                ],
                inputs: [
                    {
                        kz: 'орталық',
                        ru: 'центр',
                        sound: 'ortalyq.mp3'
                    }, {
                        kz: 'қала орталығы',
                        ru: 'центр города',
                        sound: 'qala_ortalygy.mp3'
                    }, {
                        kz: 'болды',
                        ru: 'был',
                        sound: 'boldy.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'орталық',
                        sound: 'ortalyq.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Возле дома есть дворец школьников.',
                        right: ['Үйдің жанында оқушылар сарайы бар.'],
                        wrong: ['Үйдің артында сауда орталығы бар.', 'Қала орталығында саябақ бар.']
                    }, {
                        task: 'Я был в торговом центре.',
                        right: ['Мен сауда орталығында болдым.'],
                        wrong: ['Оқушылар сарайына бардым.', 'Қала орталығында тұрамын.']
                    }
                ]
            },
            {
                title: "Қайталау 4",
                words: [
                    {
                        ru: 'столица',
                        kz: 'елорда',
                        sound: 'elorda.mp3',
                        image: 'elorda.png'
                    },
                    {
                        ru: 'спортзал',
                        kz: 'спортзал',
                        sound: null,
                        image: 'sportzal.png'
                    },
                    {
                        ru: 'бассейн',
                        kz: 'бассейн',
                        sound: null,
                        image: 'bassejn.png'
                    },
                    {
                        ru: 'дом',
                        kz: 'үй',
                        sound: null,
                        image: 'ui.png'
                    },
                    {
                        ru: 'торговый центр',
                        kz: 'сауда орталығы',
                        sound: 'sauda_ortalygy.mp3',
                        image: 'sauda_ortalygy.png'
                    },
                    {
                        ru: 'школа',
                        kz: 'мектеп',
                        sound: 'mektep.mp3',
                        image: 'mektep.png'
                    },
                    {
                        ru: 'дом',
                        kz: 'үй',
                        sound: null,
                        image: 'ui.png'
                    },
                    {
                        ru: 'дворец школьников',
                        kz: 'оқушылар сарайы',
                        sound: 'oqushylar_sarajy.mp3',
                        image: 'oqushylar_sarajy.png'
                    }
                ],
                sentences: [
                    {
                        ru: 'Прекрасна моя родная земля!',
                        kz: 'Туған жерім тамаша!',
                        sound: 'tugan_zherim_tamasha.mp3'
                    },
                    {
                        ru: 'Наша столица - Астана.',
                        kz: 'Елордамыз - Астана.',
                        sound: 'elordamyz_astana.mp3'
                    },
                    {
                        ru: 'В выходные я поеду в Астану.',
                        kz: 'Демалыста Астанаға барамын.',
                        sound: 'demalysta_astanaga_baramyn.mp3'
                    },
                ],
                inputs: [
                    {
                        kz: 'ғимарат',
                        ru: 'здание',
                        sound: 'gimarat.mp3'
                    }, {
                        kz: 'тамаша күн',
                        ru: 'прекрасный день',
                        sound: 'tamasha_kun.mp3'
                    }
                ],
                listens: [
                    {
                        kz: 'мақтанамын',
                        sound: 'maqtanamyn.mp3'
                    }, {
                        kz: 'өзен',
                        sound: 'ozen.mp3'
                    }
                ],
                multi: [
                    {
                        task: 'Я горжусь Астаной!',
                        right: ['Мен Астанамен мақтанамын!'],
                        wrong: ['Мен Астанаға барамын!', 'Мен Астанада тұрамын!']
                    }, {
                        task: 'Прекрасна природа родной земли!',
                        right: ['Туған жер табиғаты тамаша!'],
                        wrong: ['Туған жер даласы тамаша!', 'Ауыл табиғаты тамаша!']
                    }
                ]
            }
        ]
    },
    {
        name: 'ДЕНІ САУДЫҢ - ЖАНЫ САУ',
        image: '17.png',
        contents: [
            {
                title: "Гигиена",
                description: "тіс, бет, сабын, шаш, жу, тара, айна",
                words: [{
                    ru: 'зубы',
                    kz: 'тіс',
                    sound: 'tis.mp3',
                    image: 'tis.png'
                }, {
                    ru: 'рука',
                    kz: 'қол',
                    sound: 'qol.mp3',
                    image: 'qol.png'
                }, {
                    ru: 'нога',
                    kz: 'аяқ',
                    sound: 'aiaq.mp3',
                    image: 'ayak.png'
                }, {
                    ru: 'глаза',
                    kz: 'көз',
                    sound: 'koz.mp3',
                    image: 'koz.png'
                }, {
                    ru: 'лицо',
                    kz: 'бет',
                    sound: 'bet.mp3',
                    image: 'bet.png'
                }, {
                    ru: 'мыло',
                    kz: 'сабын',
                    sound: 'sabyn.mp3',
                    image: 'sabyn.png'
                }, {
                    ru: 'мячь',
                    kz: 'доп',
                    sound: 'dop.mp3',
                    image: 'dop.png'
                }, {
                    ru: 'платье',
                    kz: 'көйлек',
                    sound: 'koilek.mp3',
                    image: 'kojlek.png'
                }, {
                    ru: 'медвежонок',
                    kz: 'қонжық',
                    sound: 'qonzhyq.mp3',
                    image: 'qonzhyq.png'
                }, {
                    ru: 'зеркало',
                    kz: 'айна',
                    sound: 'ajna.mp3',
                    image: 'ajna.png'
                }, {
                    ru: 'окно',
                    kz: 'терезе',
                    sound: 'tereze.mp3',
                    image: 'tereze.png'
                }, {
                    ru: 'яблоко',
                    kz: 'алма',
                    sound: 'alma.mp3',
                    image: 'alma.png'
                }],
                inputs: [
                    {
                        ru: 'волосы',
                        kz: 'шаш',
                        sound: 'shash.mp3'
                    }
                ],
                sentences: [
                    {
                        ru: 'Ты вымыл руки?',
                        kz: 'Қолыңды жудың ба?',
                        sound: 'qolyngdy_zhudingba.mp3'
                    },
                    {
                        ru: 'Умой лицо.',
                        kz: 'Бетіңді жушы.',
                        sound: 'betingdi_zhushy.mp3'
                    },
                    {
                        ru: 'Вытри руки.',
                        kz: 'Қолыңды сүртші.',
                        sound: 'qolyngdy_surtshi.mp3'
                    },
                    {
                        ru: 'Посмотри в зеркало.',
                        kz: 'Айнаға қарашы.',
                        sound: 'ainaga_qarashy.mp3'
                    },
                    {
                        ru: 'Расчеши волосы.',
                        kz: 'Шашыңды тарашы.',
                        sound: 'shashyngdy_tarashy.mp3'
                    }
                ],
                multi: [{
                    task: 'Вымой руки с мылом.',
                    right: ['Қолыңды сабынмен жу.'],
                    wrong: ['Бетіңді сабынмен жу.', 'Шашыңды сабынмен жу.']
                }],
            },
            {
                title: "Дене шынықтыру",
                description: "таңертең, жаттығу, секіремін, жүгіремін, күнде",
                words: [{
                    ru: 'утро',
                    kz: 'таңертең',
                    sound: 'tangerteng.mp3',
                    image: 'tangerteng.png'
                }, {
                    ru: 'звезда',
                    kz: 'жұлдыз',
                    sound: 'zhuldiz.mp3',
                    image: 'zhuldyz.png'
                }, {
                    ru: 'зима',
                    kz: 'қыс',
                    sound: null,
                    image: 'qys.png'
                }, {
                    ru: 'лето',
                    kz: 'жаз',
                    sound: 'zhaz.mp3',
                    image: 'zhaz.png'
                }, {
                    ru: 'зарядка',
                    kz: 'жаттығу',
                    sound: 'zhattygu.mp3',
                    image: 'zhattygu.png'
                }, {
                    ru: 'отдых',
                    kz: 'демалыс',
                    sound: 'demalys.mp3',
                    image: 'demalys.png'
                }, {
                    ru: 'счет',
                    kz: 'есеп',
                    sound: 'esep.mp3',
                    image: 'esep.png'
                }, {
                    ru: 'каток',
                    kz: 'сырғанақ',
                    sound: null,
                    image: 'syrganaq.png'
                }, {
                    ru: 'прыгаю',
                    kz: 'секіремін',
                    sound: 'sekiremin.mp3',
                    image: 'sekiremin.png'
                }, {
                    ru: 'бегаю',
                    kz: 'жүгіремін',
                    sound: 'zhuguremin.mp3',
                    image: 'zhuguremin.png'
                }, {
                    ru: 'сижу',
                    kz: 'отырамын',
                    sound: null,
                    image: 'otyramyn.png'
                }, {
                    ru: 'вытираю',
                    kz: 'сүртемін',
                    sound: 'surtemin.mp3',
                    image: 'surtemin.png'
                }, {
                    ru: 'пишу',
                    kz: 'жазамын',
                    sound: 'zhazamyn.mp3',
                    image: 'zhazamyn.png'
                }],
                inputs: [
                    {
                        ru: 'делаю зарядку',
                        kz: 'жаттығу жасаймын',
                        sound: 'zhattygu_zhasaimyn.mp3'
                    },
                    {
                        ru: 'каждый день',
                        kz: 'күнде',
                        sound: 'kunde.mp3'
                    },
                    {
                        ru: 'прыгаю',
                        kz: 'секіремін',
                        sound: 'sekiremin.mp3'
                    }
                ],
                sentences: [{
                    ru: 'Я каждый день делаю зарядку.',
                    kz: 'Мен күнде жаттығу жасаймын.',
                    sound: 'men_kunde_zhattygu_zhasajmyn.mp3'
                }],
                multi: [{
                    task: 'Я каждый день бегаю по утрам.',
                    right: ['Мен күнде таңертең жүгіремін.'],
                    wrong: ['Мен күнде таңертең секіремін.', 'Күнде таңертең жүремін.']
                }],
                listens: [
                    {
                        kz: 'таңертең',
                        sound: 'tangerteng.mp3'
                    },
                    {
                        kz: 'жүгіремін',
                        sound: 'zhuguremin.mp3'
                    }
                ],
            },
            {
                title: "Азық-түлік",
                description: "сусын, ботқа, пайдалы, жарайды",
                words: [{
                    ru: 'каша',
                    kz: 'ботқа',
                    sound: 'botqa.mp3',
                    image: 'botqa.png'
                }, {
                    ru: 'пища, еда',
                    kz: 'тамақ',
                    sound: 'tamaq.mp3',
                    image: 'tamaq.png'
                }, {
                    ru: 'баурсак',
                    kz: 'бауырсақ',
                    sound: 'bauirsaq.mp3',
                    image: 'bauyrsaq.png'
                }, {
                    ru: 'хлеб',
                    kz: 'нан',
                    sound: 'nan.mp3',
                    image: 'nan.png'
                }, {
                    ru: 'напиток',
                    kz: 'сусын',
                    sound: 'susyn.mp3',
                    image: 'susyn.png'
                }, {
                    ru: 'вода',
                    kz: 'су',
                    sound: 'su.mp3',
                    image: 'su.png'
                }, {
                    ru: 'чай',
                    kz: 'шай',
                    sound: null,
                    image: 'shaj.png'
                }, {
                    ru: 'кофе',
                    kz: 'кофе',
                    sound: null,
                    image: 'kofe.png'
                }],
                inputs: [
                    {
                        ru: 'полезный',
                        kz: 'пайдалы',
                        sound: 'pajdaly.mp3'
                    },
                    {
                        ru: 'ботқа пайдалы',
                        kz: 'каша полезна',
                        sound: 'botqa_pajdaly.mp3'
                    },
                    {
                        ru: 'овощи и фрукты полезны',
                        kz: 'көгөніс пен жеміс-жидек пайдалы',
                        sound: 'kogonis_pen_zhemis_zhidek_pajdaly.mp3'
                    }
                ],
                sentences: [{
                    ru: 'Я утром ем кашу, хлеб, масло.  ',
                    kz: 'Мен таңертең ботқа, нан, май жеймін.',
                    sound: 'men_tagnerteng_botqa_nan_maj_zhejmin.mp3'
                }, {
                    ru: 'По утрам пей молоко.',
                    kz: 'Таңертең сүт іш.',
                    sound: 'tangerteng_sut_ish.mp3'
                }],
                multi: [{
                    task: 'Что ты ешь утром?',
                    right: ['Сен таңертең не жейсің?'],
                    wrong: ['Сен таңертең не істейсің?', 'Сен таңертең жүгіресің бе?']
                }, {
                    task: 'Хорошо, я по утрам буду пить молоко.',
                    right: ['Жарайды, таңертең сүт ішемін.'],
                    wrong: ['Жарайды, таңертең сусын ішемін.', 'Жоқ, таңертең сүт ішпеймін.']
                }],
                listens: [
                    {
                        kz: 'жеміс-жидек',
                        sound: 'zhemis_zhidek.mp3'
                    },
                    {
                        kz: 'жарайды',
                        sound: 'zharajdy.mp3'
                    }
                ],
            },
            {
                title: "Шынықсаң, шымыр боларсың",
                description: "шынық, қымыз, бірге",
                words: [{
                    ru: 'кумыс',
                    kz: 'қымыз',
                    sound: 'qymyz.mp3',
                    image: 'qymyz.png'
                }, {
                    ru: 'айран',
                    kz: 'айран',
                    sound: 'airan.mp3',
                    image: 'ajran.png'
                }, {
                    ru: 'молоко',
                    kz: 'сүт',
                    sound: 'sut.mp3',
                    image: 'sut.png'
                }, {
                    ru: 'сметана',
                    kz: 'қаймақ',
                    sound: 'qaimaq.mp3',
                    image: 'qajmaq.png'
                }, {
                    ru: 'прыгаю',
                    kz: 'секіремін',
                    sound: 'sekiremin.mp3',
                    image: 'sekiremin.png'
                }, {
                    ru: 'бегаю',
                    kz: 'жүгіремін',
                    sound: 'zhuguremin.mp3',
                    image: 'zhuguremin.png'
                }, {
                    ru: 'сижу',
                    kz: 'отырамын',
                    sound: null,
                    image: 'otyramyn.png'
                }, {
                    ru: 'вытираю',
                    kz: 'сүртемін',
                    sound: 'surtemin.mp3',
                    image: 'surtemin.png'
                }],
                inputs: [
                    {
                        ru: 'Да, нравится.',
                        kz: 'Иә, ұнайды.',
                        sound: 'ia_unajdy.mp3'
                    }, {
                        ru: 'бірге',
                        kz: 'вместе',
                        sound: 'birge.mp3'
                    }
                ],
                sentences: [{
                    ru: 'Қымыз - пайдалы сусын.',
                    kz: 'Кумыс - полезный напиток.	',
                    sound: 'qymyz_pajdaly_susyn.mp3'
                }, {
                    ru: 'Делай зарядку. Закаляйся !',
                    kz: 'Жаттығу жаса. Шынық !',
                    sound: 'zhattygu_zhasa_shynyq.mp3'
                }, {
                    ru: 'Закаляйся вместе с другом.',
                    kz: 'Досыңмен бірге шынық.',
                    sound: 'dosyngmen_birge_shynyq.mp3'
                }],
                multi: [{
                    task: 'Тебе нравится кумыс?',
                    right: ['Саған қымыз ұнай ма?'],
                    wrong: ['Саған айран ұнай ма?', 'Саған қаймақ ұнай ма?']
                }, {
                    task: 'закаляйся',
                    right: ['шынық'],
                    wrong: ['сүрт', 'жина']
                }, {
                    task: 'Пей кумыс.',
                    right: ['Қымыз іш.'],
                    wrong: ['Шай іш.', 'Айран іш.']
                }],
                listens: [
                    {
                        kz: 'шынық',
                        sound: 'shynyq.mp3'
                    }
                ],
            },
            {
                title: "Ауа райы",
                description: "ауа райы, аяз, қолғап, тон, күртеше, бүгін",
                words: [{
                    ru: 'мороз',
                    kz: 'аяз',
                    sound: 'ayaz.mp3',
                    image: 'ayaz.png'
                }, {
                    ru: 'дождь',
                    kz: 'жаңбыр',
                    sound: 'zhanbir.mp3',
                    image: 'zhangbyr.png'
                }, {
                    ru: 'снег',
                    kz: 'қар',
                    sound: 'qar.mp3',
                    image: 'qar.png'
                }, {
                    ru: 'звезда',
                    kz: 'жұлдыз',
                    sound: 'zhuldiz.mp3',
                    image: 'zhuldyz.png'
                }, {
                    ru: 'варежки',
                    kz: 'қолғап',
                    sound: 'qolgap.mp3',
                    image: 'qolgap.png'
                }, {
                    ru: 'обувь',
                    kz: 'аяқкиім',
                    sound: 'ayakkiyim.mp3',
                    image: 'ayakkiyim.png'
                }, {
                    ru: 'куртка',
                    kz: 'күртеше',
                    sound: 'kurteshe.mp3',
                    image: 'kurteshe.png'
                }, {
                    ru: 'дублёнка',
                    kz: 'тон',
                    sound: 'ton.mp3',
                    image: 'ton.png'
                }],
                inputs: [
                    {
                        ru: 'погода',
                        kz: 'ауа райы',
                        sound: 'aua_rajy.mp3'
                    },
                    {
                        ru: 'сегодня морозный день',
                        kz: 'бүгін күн аяз',
                        sound: 'bugun_kun_ayaz.mp3'
                    },
                    {
                        ru: 'жаңбырлы күн',
                        kz: 'дождливый день',
                        sound: 'zhangbyrly_kun.mp3'
                    }
                ],
                sentences: [{
                    ru: 'В морозный день надень дублёнку и варежки.',
                    kz: 'Аязды күні тон мен қолғап ки.',
                    sound: 'ayazdy_kuni_ton_men_qolgap_ki.mp3'
                }],
                multi: [{
                    task: 'Что надевают в дождливый день?',
                    right: ['Жаңбырлы күні не киеді?'],
                    wrong: ['Жазда не киеді?', 'Аязды күні не киеді?']
                }, {
                    task: 'В дождливый день надевают куртку и ботинки.',
                    right: ['Жаңбырлы күні күртеше, бәтіңке киеді.'],
                    wrong: ['Жазда көйлек киеді.', 'Аязды күні тон киеді.']
                }],
                listens: [
                    {
                        kz: 'бүгін',
                        sound: 'bugun.mp3'
                    }
                ],
            },
            {
                title: "Қайталау 5",
                words: [{
                    ru: 'зубы',
                    kz: 'тіс',
                    sound: 'tis.mp3',
                    image: 'tis.png'
                }, {
                    ru: 'рука',
                    kz: 'қол',
                    sound: 'qol.mp3',
                    image: 'qol.png'
                }, {
                    ru: 'нога',
                    kz: 'аяқ',
                    sound: 'aiaq.mp3',
                    image: 'ayak.png'
                }, {
                    ru: 'глаза',
                    kz: 'көз',
                    sound: 'koz.mp3',
                    image: 'koz.png'
                }],
                inputs: [
                    {
                        ru: 'бегаю по утрам',
                        kz: 'таңертең жүгіремін',
                        sound: 'tangerteng_zhuguremin.mp3'
                    }
                ],
                sentences: [{
                    ru: 'Он бегает и прыгает.',
                    kz: 'Ол жүгіреді, секіреді.',
                    sound: 'ol_zhuguredi_sekiredi.mp3'
                }, {
                    ru: 'Хорошо, я каждый день буду делать зарядку.',
                    kz: 'Жарайды, күнде жаттығу жасаймын.',
                    sound: 'zharajdy_kunde_zhattygu_zhasajmyn.mp3'
                }, {
                    ru: 'Делай зарядку. Закаляйся!',
                    kz: 'Жаттығу жаса. Шынық !	',
                    sound: 'zhattygu_zhasa_shynyq.mp3'
                }, {
                    ru: 'Сегодня какая погода?	',
                    kz: 'Бүгін ауа райы қандай ?',
                    sound: 'bugun_aua_rajy_qandaj.mp3'
                }],
                multi: [{
                    task: 'Делай зарядку каждый день.',
                    right: ['Сен күнде жаттығу жаса.'],
                    wrong: ['Сен күнде жүгір.', 'Сен күнде үйді сыпыр.']
                }, {
                    task: 'Почисти зубы.',
                    right: ['Тісіңді жу.'],
                    wrong: ['Қолыңды жу.', 'Бетіңді жу.']
                }, {
                    task: 'Погода прекрасна!',
                    right: ['Ауа райы тамаша!'],
                    wrong: ['Ауа райы жақсы.', 'Ауа райы салқын.']
                }],
                listens: [
                    {
                        kz: 'жаттығу',
                        sound: 'zhattygu.mp3'
                    },
                    {
                        kz: 'күртеше',
                        sound: 'kurteshe.mp3'
                    }
                ],
            }
        ]
    },
    {
        name: 'САЛТ-ДӘСТҮР ЖӘНЕ АУЫЗ ӘДЕБИЕТІ 1',
        image: '15.png',
        contents: [
            {
                title: "Сөз өнері 1",
                description: "тақпақ, жұмбақ, жатта, жасырамын, тез, туралы",
                inputs: [{
                    ru: 'выучил стих',
                    kz: 'тақпақ жаттадым',
                    sound: 'taqpaq_ajttym.mp3'
                }, {
                    ru: 'быстро',
                    kz: 'тез',
                    sound: 'tez.mp3'
                }, {
                    ru: 'о, про',
                    kz: 'туралы',
                    sound: 'turaly.mp3'
                }],
                sentences: [{
                    ru: 'Я быстро выучил стих.',
                    kz: 'Мен тақпақты тез жаттадым.',
                    sound: 'men_taqpaqty_tez_zhattadym.mp3'
                }, {
                    ru: 'Я расскажу стих об Астане.',
                    kz: 'Мен Астана туралы тақпақ айтамын.',
                    sound: 'men_astana_turaly_taqpaq_ajtamyn.mp3'
                }],
                listens: [{
                    kz: 'тақпақ',
                    sound: 'taqpaq.mp3'
                }, {
                    kz: 'жұмбақ',
                    sound: 'zhumbaq.mp3'
                }],
                multi: [{
                    task: 'стих',
                    right: ['тақпақ'],
                    wrong: ['ән', 'ертегі']
                }, {
                    task: 'загадка',
                    right: ['жұмбақ'],
                    wrong: ['тақпақ', 'ән']
                }, {
                    task: 'загадаю загадку',
                    right: ['жұмбақ жасырамын'],
                    wrong: ['жұмбақ білемін', 'тақпақ айтамын']
                }, {
                    task: 'Мой брат знает много загадок.',
                    right: ['Ағам көп жұмбақ біледі.'],
                    wrong: ['Ағам көп ертегі біледі.', 'Ағам тақпақ біледі.']
                }],
            },
            {
                title: "Сөз өнері 2",
                description: "мақал, санамақ, үйретті",
                inputs: [{
                    ru: 'научил считалкам',
                    kz: 'санамақ үйретті',
                    sound: 'sanamaq_ujretti.mp3'
                }],
                sentences: [{
                    ru: 'Я выучил считалку.',
                    kz: 'Мен санамақ жаттадым.',
                    sound: 'men_sanamaq_zhattadym.mp3'
                }, {
                    kz: 'Иә, мен туған жер туралы мақал білемін.',
                    ru: 'Да, я знаю пословицу о Родине.',
                    sound: 'ia_men_tugan_zher_turaly_maqal_bilemin.mp3'
                }, {
                    ru: 'Бабушка, посчитай мне считалку.',
                    kz: 'Әже, маған санамақ айтшы.',
                    sound: 'azhe_magan_sanamaq_ajtshy.mp3'
                }],
                listens: [{
                    kz: 'мақал',
                    sound: 'maqal.mp3'
                }, {
                    kz: 'үйретті',
                    sound: 'ujretti.mp3'
                }],
                multi: [{
                    task: 'пословица',
                    right: ['мақал'],
                    wrong: ['жұмбақ', 'тақпақ']
                }, {
                    task: 'считалка',
                    right: ['санамақ'],
                    wrong: ['мақал', 'жұмбақ']
                }, {
                    task: 'Знаешь ли ты пословицу о Родине?',
                    right: ['Сен туған жер туралы мақал білесің бе?'],
                    wrong: ['Сен ана туралы мақал білесің бе?', 'Сен туған жер туралы тақпақ білесің бе?']
                }, {
                    task: 'Дедушка учил меня считалкам.',
                    right: ['Атам маған санамақ үйретті.'],
                    wrong: ['Атам маған мақал үйретті.', 'Атам саған санамақ үйретті.']
                }, {
                    task: 'Я расскажу тебе пословицы о маме.',
                    right: ['Саған ана туралы мақал айтамын.'],
                    wrong: ['Саған тақпақ айтамын.', 'Туған жер туралы мақал айтамын.']
                }],
            },
            {
                title: "Ұлттық киім",
                description: "тақия, шапан, етік",
                words: [
                    {
                        ru: 'тюбетейка',
                        kz: 'тақия',
                        sound: 'taqiya.mp3',
                        image: 'taqiya.png'
                    }, {
                        ru: 'платье',
                        kz: 'көйлек',
                        sound: 'koilek.mp3',
                        image: 'kojlek.png'
                    }, {
                        ru: 'обувь',
                        kz: 'аяқкиім',
                        sound: 'ayakkiyim.mp3',
                        image: 'ayakkiyim.png'
                    }, {
                        ru: 'чапан',
                        kz: 'шапан',
                        sound: 'shapan.mp3',
                        image: 'shapan.png'
                    }, {
                        ru: 'головной убор',
                        kz: 'бас киім',
                        sound: 'baskiyim.mp3',
                        image: 'baskiyim.png'
                    }, {
                        ru: 'сапоги',
                        kz: 'етік',
                        sound: 'etik.mp3',
                        image: 'etik.png'
                    }],
                inputs: [{
                    ru: 'красивая тюбетейка',
                    kz: 'әдемі тақия',
                    sound: 'ademi_taqiya.mp3'
                }, {
                    ru: 'длинные сапоги',
                    kz: 'ұзын етік	',
                    sound: 'uzyn_eti\n.mp3'
                }, {
                    ru: 'синяя тюбетейка',
                    kz: 'көк тақия',
                    sound: 'kok_taqiya.mp3'
                }],
                sentences: [{
                    ru: 'У тебя длинный чапан ?',
                    kz: 'Сенің шапаның ұзын ба ?',
                    sound: 'sening_shapanyng_uzyn_ba.mp3'
                }, {
                    ru: 'Какая у него тюбетейка ?',
                    kz: 'Оның тақиясы қандай ?',
                    sound: 'onyng_taqiyasy_qandaj.mp3'
                }],
                listens: [{
                    kz: 'тақия',
                    sound: 'taqiya.mp3'
                }],
                multi: [{
                    task: 'Нет, у меня короткий чапан.',
                    right: ['Жоқ, менің шапаным қысқа.'],
                    wrong: ['Жоқ, менің етігім қысқа.', 'Иә, менің шапаным ұзын.']
                }, {
                    task: 'У него синяя тюбетейка',
                    right: ['Оның тақиясы көк.'],
                    wrong: ['Оның тақиясы ақ.', 'Оның тақиясы қара.']
                }],
            }
        ]
    },
    {
        name: 'САЛТ-ДӘСТҮР ЖӘНЕ АУЫЗ ӘДЕБИЕТІ 2',
        image: '15.png',
        contents: [
            {
                title: "Дастарқан мәзірі",
                description: "дастарқан, шелпек, құрт",
                words: [{
                    ru: 'дастархан(накрытый стол)',
                    kz: 'дастарқан',
                    sound: 'dastarqan.mp3',
                    image: 'dastarqan.png'
                }, {
                    ru: 'напиток',
                    kz: 'сусын',
                    sound: 'susyn.mp3',
                    image: 'susyn.png'
                }, {
                    ru: 'сыр',
                    kz: 'ірімшік',
                    sound: 'irimshik.mp3',
                    image: 'irimshik.png'
                }, {
                    ru: 'каша',
                    kz: 'ботқа',
                    sound: 'botqa.mp3',
                    image: 'botqa.png'
                }, {
                    ru: 'шелпек',
                    kz: 'шелпек',
                    sound: 'shelpek.mp3',
                    image: 'shelpek.png'
                }, {
                    ru: 'баурсак',
                    kz: 'бауырсақ',
                    sound: 'bauyrsak.mp3',
                    image: 'bauyrsak.png'
                }, {
                    ru: 'курт',
                    kz: 'құрт',
                    sound: 'qurt.mp3',
                    image: 'qurt.png'
                }, {
                    ru: 'хлеб',
                    kz: 'нан',
                    sound: 'nan.mp3',
                    image: 'nan.png'
                }],
                inputs: [{
                    ru: 'прошу к столу',
                    kz: 'дастарқанға келіңіз',
                    sound: 'dastarqanga_kelingiz.mp3'
                }, {
                    ru: 'вкусный курт',
                    kz: 'дәмді құрт',
                    sound: 'damdi_qurt.mp3'
                }],
                sentences: [{
                    ru: 'Мама накрыла на стол.',
                    kz: 'Анам дастарқан жайды.',
                    sound: 'anam_dastarqan_zhajdy.mp3'
                }, {
                    ru: 'Мне нравится курт моей бабушки.',
                    kz: 'Маған әжемнің құрты ұнайды.',
                    sound: 'magan_azhemning_qurty_unajdy.mp3'
                }, {
                    ru: 'Что есть на столе ?',
                    kz: 'Дастарқанда не бар ?',
                    sound: 'dastarqanda_ne_bar.mp3'
                }],
                listens: [{
                    kz: 'құрт',
                    sound: 'qurt.mp3'
                }],
                multi: [{
                    task: 'Мама испекла вкусные бауырсаки и шелпеки.',
                    right: ['Анам дәмді бауырсақ, шелпек пісірді.'],
                    wrong: ['Анам дәмді нан пісірді.', 'Әжем дәмді бауырсақ, шелпек пісірді.']
                }, {
                    task: 'На столе есть бауырсаки, сметана и курт.',
                    right: ['Дастарқанда бауырсақ, қаймақ, құрт бар.'],
                    wrong: ['Дастарқанда бауырсақ, нан бар.', 'Дастарқанда шелпек, бауырсақ, қаймақ бар.']
                }],
            },
            {
                title: "Қонаққа шақыру",
                description: "қонақ, шақыр, ертең, қуаныш, қарсы алдым",
                words: [{
                    ru: 'гость',
                    kz: 'қонақ',
                    sound: 'qonaq.mp3',
                    image: 'qonaq.png'
                }, {
                    ru: 'ученик',
                    kz: 'оқушы',
                    sound: 'oqushy.mp3',
                    image: 'oqushy.png'
                }, {
                    ru: 'дедушка',
                    kz: 'ата',
                    sound: 'ata.mp3',
                    image: 'ata.png'
                }, {
                    ru: 'бабушка',
                    kz: 'әже',
                    sound: 'azhe.mp3',
                    image: 'azhe.png'
                }, {
                    ru: 'помогаю',
                    kz: 'көмектесемін',
                    sound: 'komektesemin.mp3',
                    image: 'komektesemin.png'
                }, {
                    ru: 'вытираю',
                    kz: 'сүртемін',
                    sound: 'surtemin.mp3',
                    image: 'surtemin.png'
                }, {
                    ru: 'пишу',
                    kz: 'жазамын',
                    sound: 'zhazamyn.mp3',
                    image: 'zhazamyn.png'
                }, {
                    ru: 'играю',
                    kz: 'ойнаймын',
                    sound: 'ojnajmyn.mp3',
                    image: 'ojnajmyn.png'
                }],
                inputs: [{
                    ru: 'пригласи в гости',
                    kz: 'қонаққа шақыр',
                    sound: 'qonaqqa_shaqyr.mp3'
                }, {
                    ru: 'я встретил',
                    kz: 'қарсы алдым',
                    sound: 'qarsy_aldym.mp3'
                }],
                sentences: [{
                    ru: 'Завтра пригласи друзей в гости.',
                    kz: 'Ертең достарыңды қонаққа шақыр.	',
                    sound: 'erteng_dostaryngdy_qonaqqa_shaqyr.mp3'
                }, {
                    ru: 'Мои друзья пришли в гости.',
                    kz: 'Достарым қонаққа келді.',
                    sound: 'dostarym_qonaqqa_keldi.mp3'
                }, {
                    ru: 'Младший брат гостям сыграл на домбре.',
                    kz: 'Інім қонақтарға домбыра тартты.',
                    sound: 'inim_qonaqtarga_dombyra_tartty.mp3'
                }],
                listens: [{
                    kz: 'ертең',
                    sound: 'erteng.mp3'
                }, {
                    kz: 'көмектесемін',
                    sound: 'komektesemin.mp3'
                }],
                multi: [{
                    task: 'Я помогаю маме.',
                    right: ['Мен анама көмектесемін.'],
                    wrong: ['Мен анама айтамын.', 'Мен әкеме көмектесемін.']
                }, {
                    task: 'Они принесли мне много подарков.',
                    right: ['Олар маған көп сыйлық әкелді.'],
                    wrong: ['Олар маған аз сыйлық әкелді.', 'Олар маған сыйлық берді.']
                }],
            },
            {
                title: "Қайталау 6",
                words: [{
                    ru: 'дастархан (накрытый стол)',
                    kz: 'дастарқан',
                    sound: 'dastarqan.mp3',
                    image: 'dastarqan.png'
                }, {
                    ru: 'стол',
                    kz: 'үстел',
                    sound: 'ustel.mp3',
                    image: 'ustel.png'
                }, {
                    ru: 'стул, табуретка',
                    kz: 'орындық',
                    sound: 'oryndyk.mp3',
                    image: 'oryndyk.png'
                }, {
                    ru: 'доска',
                    kz: 'тақта',
                    sound: 'takta.mp3',
                    image: 'takta.png'
                }],
                inputs: [{
                    ru: 'я рассказал стих',
                    kz: 'тақпақ айттым',
                    sound: 'taqpaq_ajttym.mp3'
                }],
                sentences: [{
                    ru: 'Гостям было весело.',
                    kz: 'Қонақтар көңілді отырды.',
                    sound: 'qonaqtar_kongildi_otyrdy.mp3'
                }, {
                    ru: 'Спасибо, еда была вкусная.',
                    kz: 'Рақмет, тамақ дәмді болды.',
                    sound: 'raqmet_tamaq_damdi_boldy.mp3'
                }, {
                    ru: 'Нет, я сегодня надену синюю тюбетейку.',
                    kz: 'Жоқ, мен бүгін көк тақия киемін.',
                    sound: 'zhoq_men_bugun_kok_taqiya_kiemin.mp3'
                }, {
                    ru: 'Младший брат рассказал гостям стих.',
                    kz: 'Інім қонақтарға тақпақ айтты.',
                    sound: 'inim_qonaqtarga_taqpaq_ajttymp3'
                }],
                listens: [{
                    kz: 'тақпақ',
                    sound: 'taqpaq.mp3'
                }],
                multi: [{
                    task: 'На столе есть бауырсаки, сметана и вкусные салаты.',
                    right: ['Дастарқанда бауырсақ, қаймақ және дәмді салаттар бар.'],
                    wrong: ['Дастарқанда бауырсақ пен айран бар.', 'Дастарқанда айран мен қаймақ бар.']
                }, {
                    task: 'Ты сегодня наденешь зеленую тюбетейку?',
                    right: ['Сен бүгін жасыл тақия киесің бе?'],
                    wrong: ['Сен бүгін ақ тақия киесің бе?', 'Сен бүгін жасыл шапан киесің бе?']
                }, {
                    task: 'Я друзьям загадал загадку.',
                    right: ['Мен достарыма жұмбақ жасырдым.'],
                    wrong: ['Мен достарыма санамақ айттым.', 'Мен атама жұмбақ жасырдым.']
                }]
            }
        ]
    },
    {
        name: 'ҚОРШАҒАН ОРТА',
        image: '10.png',
        contents: [
            {
                title: "Көшеде",
                description: "бағдаршам, түс, тоқта, дайындал",
                words: [{
                    ru: 'светофор',
                    kz: 'бағдаршам',
                    sound: 'bagdarsham.mp3',
                    image: 'bagdarsham.png'
                }, {
                    ru: 'улица',
                    kz: 'көше',
                    image: 'koshe.png',
                    sound: 'koshe.mp3'
                }, {
                    kz: 'қала',
                    ru: 'город',
                    image: 'kala.png',
                    sound: 'kala.mp3'
                }, {
                    kz: 'бөлме',
                    ru: 'комната',
                    image: 'bolme.png',
                    sound: 'bolme.mp3',
                }, {
                    ru: 'остановись',
                    kz: 'тоқта',
                    sound: 'toqta.mp3',
                    image: 'toqta.png'
                }, {
                    ru: 'пойдем',
                    kz: 'жүр',
                    sound: 'zhur.mp3',
                    image: 'zhur.png'
                }, {
                    ru: 'садись',
                    kz: 'отыр',
                    sound: 'otyr.mp3',
                    image: 'otyr.png'
                }, {
                    ru: 'прыгай',
                    kz: 'секір',
                    sound: 'sekir.mp3',
                    image: 'sekir.png'
                }],
                inputs: [{
                    ru: 'цвет',
                    kz: 'түс',
                    sound: 'tus.mp3'
                }, {
                    ru: 'зеленый цвет',
                    kz: 'жасыл түс',
                    sound: 'zasil_tus.mp3'
                }, {
                    ru: 'приготовься',
                    kz: 'дайындал',
                    sound: 'dajyndal.mp3'
                }],
                sentences: [{
                    ru: 'Из скольких цветов состоит светофор ?',
                    kz: 'Бағдаршамның неше түсі бар ?',
                    sound: 'bagdarshamnyng_neshe_tusu_bar.mp3'
                }, {
                    ru: 'Светофор состоит из трех цветов.',
                    kz: 'Бағдаршамның  үш түсі бар.',
                    sound: 'bagdarshamnyng_ush_tusu_bar.mp3'
                }],
                listens: [{
                    kz: 'бағдаршам',
                    sound: 'bagdarsham.mp3'
                }],
                multi: [{
                    task: 'На красном - остановись!',
                    right: ['Қызыл түске - тоқта!'],
                    wrong: ['Сары түске - дайындал!', 'Жасыл түсте - жүр!']
                }, {
                    task: 'На желтом - приготовься!',
                    right: ['Сары түске - дайындал!'],
                    wrong: ['Жасыл түсте - жүр!', 'Қызыл түске - тоқта!']
                }, {
                    task: 'На зеленом - иди!',
                    right: ['Жасыл түсте - жүр!'],
                    wrong: ['Қызыл түске - тоқта!', 'Сары түске - дайындал!']
                }],
            },
            {
                title: "Саябақта",
                description: "кептер, саябақ, не істедің",
                words: [{
                    ru: 'голубь',
                    kz: 'кептер',
                    sound: 'kepter.mp3',
                    image: 'kepter.png'
                }, {
                    ru: 'петух',
                    kz: 'әтеш',
                    sound: 'atesh.mp3',
                    image: 'atesh.png'
                }, {
                    ru: 'гусь',
                    kz: 'қаз',
                    sound: 'kaz.mp3',
                    image: 'qaz.png'
                }, {
                    ru: 'утка',
                    kz: 'үйрек',
                    sound: 'ujrek.mp3',
                    image: 'ujrek.png'
                }, {
                    ru: 'парк',
                    kz: 'саябақ',
                    sound: 'sayabaq.mp3',
                    image: 'sayabaq.png'
                }, {
                    ru: 'река',
                    kz: 'өзен',
                    sound: 'ozen.mp3',
                    image: 'ozen.png'
                }, {
                    ru: 'гора',
                    kz: 'тау',
                    sound: 'tau.mp3',
                    image: 'tau.png'
                }, {
                    ru: 'степь',
                    kz: 'дала',
                    sound: 'dala.mp3',
                    image: 'dala.png'
                }],
                inputs: [{
                    ru: 'голубь',
                    kz: 'кептер	',
                    sound: 'kepter.mp3'
                }, {
                    ru: 'Ты куда ходил?',
                    kz: 'Сен қайда бардың?',
                    sound: 'sen_qajda_bardyng.mp3'
                }],
                sentences: [{
                    ru: 'Что делал ?',
                    kz: 'Не істедің ?',
                    sound: 'ne_isteding.mp3'
                }, {
                    ru: 'Мы пойдем в парк.',
                    kz: 'Біз саябаққа барамыз.',
                    sound: 'biz_sayabaqqa_baramyz.mp3'
                }, {
                    ru: 'Я ходил в парк.',
                    kz: 'Мен саябаққа бардым.',
                    sound: 'men_sayabaqqa_bardym.mp3'
                }, {
                    ru: 'Что ты делал в парке ?',
                    kz: 'Саябақта не істедің ?',
                    sound: 'sayabaqta_ne_isteding.mp3'
                }],
                listens: [{
                    kz: 'саябақ',
                    sound: 'sayabaq.mp3'
                }],
                multi: [{
                    task: 'За домом есть парк.',
                    right: ['Үйдің артында саябақ бар.'],
                    wrong: ['Үйдің алдында саябақ бар.', 'Үйдің жанында саябақ бар.']
                }, {
                    task: 'В парке кормил голубей.',
                    right: ['Саябақта кептерлерге жем бердім.'],
                    wrong: ['Саябақта әткеншек тептім.', 'Саябақта ойнадым.']
                }]
            },
            {
                title: "Дүкенде",
                description: "қанша тұрады, ақша, күнделік",
                words: [{
                    ru: 'деньги',
                    kz: 'ақша',
                    sound: 'aqsha.mp3',
                    image: 'aqsha.png'
                }, {
                    ru: 'тетрадь',
                    kz: 'дәптер',
                    sound: 'dapter.mp3',
                    image: 'dapter.png'
                }, {
                    ru: 'книга',
                    kz: 'кітап',
                    sound: 'kitap.mp3',
                    image: 'kitap.png'
                }, {
                    ru: 'буква',
                    kz: 'әріп',
                    sound: 'arip.mp3',
                    image: 'arip.png'
                }, {
                    ru: 'дневник',
                    kz: 'күнделік',
                    sound: 'kundelik.mp3',
                    image: 'kundelik.png'
                }, {
                    ru: 'карандаш',
                    kz: 'қарындаш',
                    sound: 'qaryndash.mp3',
                    image: 'karindash.png'
                }, {
                    ru: 'линейка',
                    kz: 'сызғыш',
                    sound: 'syzgysh.mp3',
                    image: 'syzgysh.png'
                }],
                inputs: [{
                    ru: 'дал деньги',
                    kz: 'ақша берді	',
                    sound: 'aqsha_berdi.mp3'
                }, {
                    ru: 'Сколько стоит?',
                    kz: 'Қанша тұрады?',
                    sound: 'qansha_turady.mp3'
                }],
                sentences: [{
                    ru: 'отец дал деньги',
                    kz: 'әкем ақша берді',
                    sound: 'akem_aqsha_berdi.mp3'
                }, {
                    ru: 'Сколько стоит дневник ?',
                    kz: 'Күнделік қанша тұрады ?',
                    sound: 'kundelik_qansha_turady.mp3'
                }, {
                    ru: 'Дайте мне тетрадь и дневник.',
                    kz: 'Маған дәптер мен күнделік беріңізші.',
                    sound: 'magan_dapter_men_kundelik_berinizshi.mp3'
                }],
                listens: [{
                    kz: 'ақша',
                    sound: 'aqsha.mp3'
                }],
                multi: [{
                    task: 'Я пойду в магазин.',
                    right: ['Мен дүкенге барамын.'],
                    wrong: ['Мен дәріханаға барамын.', 'Мен саябаққа барамын.']
                }, {
                    task: 'Дневник стоит 500 тенге.',
                    right: ['Күнделік 500 теңге тұрады.'],
                    wrong: ['Кітап 500 теңге тұрады.', 'Сызғыш 500 теңге тұрады.']
                }, {
                    task: 'Спасибо, до свидания!',
                    right: ['Рақмет, сау болыңыз!'],
                    wrong: ['Салеметсіз бе, қош келдіңіз!', 'Сәлем, қалың қалай?']
                }]
            },
            {
                title: "Тазалық, аула",
                description: "қоқыс, тастама, су құй, ағаш отырғызады",
                words: [{
                    ru: 'сажать деревья',
                    kz: 'ағаш отырғызу',
                    sound: 'agash_otyrgyzu.mp3',
                    image: 'agash_otyrgyzu.png'
                }, {
                    ru: 'вытирать пыль',
                    kz: 'шаң сүрту',
                    sound: 'shang_surtu.mp3',
                    image: 'shang_surtu.png'
                }, {
                    ru: 'мыть пол',
                    kz: 'еден жуу',
                    sound: 'eden_zhuu.mp3',
                    image: 'eden_zhuu.png'
                }, {
                    ru: 'вытирать доску',
                    kz: 'тақтаны сүрту',
                    sound: 'taqtany_surtu.mp3',
                    image: 'taqta_surtu.png'
                }, {
                    ru: 'мусор',
                    kz: 'қоқыс',
                    sound: 'qoqys.mp3',
                    image: 'qoqys.png'
                }, {
                    ru: 'двор',
                    kz: 'аула',
                    sound: 'aula.mp3',
                    image: 'aula.png'
                }, {
                    ru: 'цветок',
                    kz: 'гүл',
                    sound: 'gul.mp3',
                    image: 'gul.png'
                }, {
                    kz: 'қала',
                    ru: 'город',
                    image: 'kala.png',
                    sound: 'kala.mp3'
                }],
                inputs: [{
                    ru: 'сажают деревья',
                    kz: 'ағаш отырғызады',
                    sound: 'agash_otirgyzady.mp3'
                }, {
                    ru: 'не бросай мусор',
                    kz: 'қоқыс тастама',
                    sound: 'qoqys_tastama.mp3'
                }],
                sentences: [{
                    ru: 'Весной сажают деревья.',
                    kz: 'Көктемде ағаш отырғызады.',
                    sound: 'koktemde_agash_otirgyzady.mp3'
                }, {
                    ru: 'Не бросай мусор во дворе.',
                    kz: 'Аулаға қоқыс тастама.',
                    sound: 'aulaga_qoqys_tastama.mp3'
                }, {
                    ru: 'Ты полил деревья ?',
                    kz: 'Ағашқа су құйдың ба ?',
                    sound: 'agashqa_su_kujdyng_ba.mp3'
                }],
                listens: [{
                    kz: 'қоқыс',
                    sound: 'qoqys.mp3'
                }],
                multi: [{
                    task: 'не бросай',
                    right: ['тастама'],
                    wrong: ['отыр', 'бер']
                }, {
                    task: 'полей',
                    right: ['су құй'],
                    wrong: ['су іш', 'су әкел']
                }, {
                    task: 'Да, я полил деревья.',
                    right: ['Иә, ағашқа су құйдым.'],
                    wrong: ['Иә, гүлге су құйдым.', 'Жоқ, ағашқа су құймадым.']
                }]
            },
            {
                title: "Қайталау 7",
                words: [{
                    ru: 'парк',
                    kz: 'саябақ',
                    sound: 'sayabaq.mp3',
                    image: 'sayabaq.png'
                }, {
                    ru: 'река',
                    kz: 'өзен',
                    sound: 'ozen.mp3',
                    image: 'ozen.png'
                }, {
                    ru: 'гора',
                    kz: 'тау',
                    sound: 'tau.mp3',
                    image: 'tau.png'
                }, {
                    ru: 'степь',
                    kz: 'дала',
                    sound: 'dala.mp3',
                    image: 'dala.png'
                }, {
                    ru: 'голубь',
                    kz: 'кептер',
                    sound: 'kepter.mp3',
                    image: 'kepter.png'
                }, {
                    ru: 'петух',
                    kz: 'әтеш',
                    sound: 'atesh.mp3',
                    image: 'atesh.png'
                }, {
                    ru: 'гусь',
                    kz: 'қаз',
                    sound: 'kaz.mp3',
                    image: 'qaz.png'
                }, {
                    ru: 'утка',
                    kz: 'үйрек',
                    sound: 'ujrek.mp3',
                    image: 'ujrek.png'
                }],
                inputs: [{
                    ru: 'голуби',
                    kz: 'кептерлер',
                    sound: 'kepterler.mp3'
                }, {
                    ru: 'полил дерево',
                    kz: 'ағашқа су құйдым',
                    sound: 'agashqa_su_kujdym.mp3'
                }],
                sentences: [{
                    ru: 'На красном - остановись!',
                    kz: 'Қызыл түске - тоқта!',
                    sound: 'kizil_tuske_tokta.mp3'
                }, {
                    ru: 'В парке кормил голубей.',
                    kz: 'Саябақта кептерлерге жем бердім.',
                    sound: 'sayabaqta_kepterlerge_zhem_berdim.mp3'
                }, {
                    ru: 'Сколько стоит дневник ?',
                    kz: 'Күнделік қанша тұрады ?',
                    sound: 'kundelik_qansha_turady.mp3'
                }, {
                    ru: 'Что ты делал во дворе ?',
                    kz: 'Аулада не істедің ?',
                    sound: 'aulada_ne_isteding.mp3'
                }],
                multi: [{
                    task: 'Я ходил в магазин.',
                    right: ['Дүкенге бардым.'],
                    wrong: ['Дүкенге кірдім.', 'Дүкеннен шықтым.']
                }, {
                    task: 'Дневник стоит 500 тенге.',
                    right: ['Күнделік 500 теңге тұрады.'],
                    wrong: ['Кітап 500 теңге тұрады.', 'Сызғыш 500 теңге тұрады.']
                }, {
                    task: 'Я во дворе сажал деревья.',
                    right: ['Аулада ағаш отырғыздым.'],
                    wrong: ['Аулада гүл отырғыздым.', 'Аулада ағаш бар.']
                }]
            }
        ]
    },
    {
        name: 'САЯХАТ',
        image: '16.png',
        contents: [
            {
                title: "Саяхатқа шығу",
                description: "жаяу жүремін, қыдырамын, саяхатқа шығамын",
                words: [{
                    ru: 'хожу пешком',
                    kz: 'жаяу жүремін',
                    sound: 'zhayau_zhuremin.mp3',
                    image: 'zhayau_zhuremin.png'
                }, {
                    ru: 'играю на домбре',
                    kz: 'домбыра тартамын',
                    sound: 'dombyra_tartamyn.mp3',
                    image: 'dombyra_tartamyn.png'
                }, {
                    ru: 'играю в мячь',
                    kz: 'доп ойнаймын',
                    sound: null,
                    image: 'dop_ojnajmyn.png'
                }, {
                    ru: 'читаю книгу',
                    kz: 'кітап оқимын',
                    sound: null,
                    image: 'kitap_oqimyn.png'
                }, {
                    ru: 'гуляю',
                    kz: 'қыдырамын',
                    sound: 'qydyramyn.mp3',
                    image: 'qydyramyn.png'
                }, {
                    ru: 'пою',
                    kz: 'ән айтамын',
                    sound: 'an_ajtamyn.mp3',
                    image: 'an_ajtamyn.png'
                }, {
                    ru: 'катаюсь на лыжах',
                    kz: 'шаңғы тебемін',
                    sound: 'shangy_tebemin.mp3',
                    image: 'shangy_tebemin.png'
                }, {
                    ru: 'буду путешествовать',
                    kz: 'саяхатқа шығамын',
                    sound: 'sayahatqa_shygamyn.mp3',
                    image: 'sayahatqa_shygamyn.png'
                }, {
                    ru: 'пойду в школу',
                    kz: 'мектепке барамын',
                    sound: null,
                    image: 'mektepke_baramyn.png'
                }, {
                    ru: 'пойду в магазин',
                    kz: 'дүкенге барамын',
                    sound: null,
                    image: 'dukenge_baramyn.png'
                }, {
                    ru: 'рисую',
                    kz: 'сурет саламын',
                    sound: 'suret_salamyn.mp3',
                    image: 'suret_salamyn.png'
                }],
                inputs: [{
                    ru: 'ходить пешком полезно',
                    kz: 'жаяу жүру пайдалы',
                    sound: 'zhayau_zhuru_pajdaly.mp3'
                }],
                sentences: [{
                    ru: 'Ты будешь путешествовать на машине ?',
                    kz: 'Сен саяхатқа мәшинемен  шығасың  ба ?',
                    sound: 'sen_sayahatqa_mashinemen_shigasyn_ba.mp3'
                }, {
                    ru: 'Да, я буду путешествовать на машине.',
                    kz: 'Иә, мен саяхатқа мәшинемен шығамын.',
                    sound: 'ia_men_sayahatqa_mashinemen_shigamyn.mp3'
                }, {
                    ru: 'С кем будешь путешествовать ?',
                    kz: 'Саяхатқа кіммен барасың ?',
                    sound: 'sayahatqa_kimmen_barasyng.mp3'
                }, {
                    ru: 'Путешествовать буду с семьей.',
                    kz: 'Саяхатқа отбасыммен барамын.',
                    sound: 'sayahatqa_otbasymmen_baramyn.mp3'
                }],
                listens: [{
                    kz: 'қыдырамын',
                    sound: 'qydyramyn.mp3'
                }],
                multi: [{
                    task: 'Я летом гуляю.',
                    right: ['Мен жазда қыдырамын.'],
                    wrong: ['Мен жазда ауылға барамын.', 'Мен жазда демаламын.']
                },
                    {
                        task: 'Ура, мы будем путешествовать!',
                        right: ['Алақай, біз саяхатқа шығамыз!'],
                        wrong: ['Олар жолға көлікпен шықты.', 'Ол жаяу жүргенді ұнатады.']
                    }]
            },
            {
                title: "Бурабайға саяхат",
                description: "биік, тауға шығамын, өзен",
                words: [{
                    ru: 'река',
                    kz: 'өзен',
                    sound: 'ozen.mp3',
                    image: 'ozen.png'
                }, {
                    kz: 'қала',
                    ru: 'город',
                    image: 'kala.png',
                    sound: 'kala.mp3'
                }, {
                    ru: 'лес',
                    kz: 'орман',
                    sound: 'orman.mp3',
                    image: 'orman.png'
                }, {
                    ru: 'жайлау',
                    kz: 'жайлау',
                    sound: 'zhajlau.mp3',
                    image: 'zhajlau.png'
                }, {
                    ru: 'поднимусь в горы',
                    kz: 'тауға шығамын',
                    sound: 'tauga_shygamyn.mp3',
                    image: 'tauga_shygamyn.png'
                }, {
                    ru: 'пою',
                    kz: 'ән айтамын',
                    sound: 'an_ajtamyn.mp3',
                    image: 'an_ajtamyn.png'
                }, {
                    ru: 'катаюсь на лыжах',
                    kz: 'шаңғы тебемін',
                    sound: 'shangy_tebemin.mp3',
                    image: 'shangy_tebemin.png'
                }, {
                    ru: 'играю в мячь',
                    kz: 'доп ойнаймын',
                    sound: null,
                    image: 'dop_ojnajmyn.png'
                }],
                inputs: [{
                    ru: 'высокая гора',
                    kz: 'биік тау',
                    sound: 'biik_tau.mp3'
                }],
                sentences: [{
                    ru: 'Где ты был летом ?',
                    kz: 'Сен жазда қайда болдың ?',
                    sound: 'sen_zhazda_qajda_boldyng.mp3'
                }, {
                    ru: 'Я летом был в Бурабае.',
                    kz: 'Мен Бурабайда болдым.',
                    sound: 'men_burabajda_boldym.mp3'
                }, {
                    ru: 'Что ты делал в Бурабае ?',
                    kz: 'Бурабайда не істедің ?',
                    sound: 'burabajda_ne_isteding.mp3'
                }, {
                    ru: 'В Бурабае я поднимался в горы.',
                    kz: 'Бурабайда тауға шықтым.',
                    sound: 'burabajda_tauga_shyqtym.mp3'
                }, {
                    ru: 'В Бурабае я видел высокую гору.',
                    kz: 'Мен Бурабайда биік тау көрдім.',
                    sound: 'men_burabajda_biik_tau_kordim.mp3'
                }],
                listens: [{
                    kz: 'биік',
                    sound: 'biik.mp3'
                }, {
                    kz: 'тауға шығу',
                    sound: 'tauga_shygu.mp3'
                }],
                multi: [{
                    task: 'Он хорошо отдохнул в Кокшетау.',
                    right: ['Ол Көкшетауда жақсы демалды.'],
                    wrong: ['Ол Астанада демалды.', 'Жазда ол ауылға барды.']
                }],
            },
            {
                title: "Алакөлге барғанда",
                description: "денсаулық, керемет, суға түсемін",
                words: [{
                    ru: 'купаюсь',
                    kz: 'суға түсемін',
                    sound: 'suga_tusemin.mp3',
                    image: 'suga_tusemin.png'
                }, {
                    ru: 'вытираю доску',
                    kz: 'тақта сүртемін',
                    sound: null,
                    image: 'taqta_surtemin.png'
                }, {
                    ru: 'мою полы',
                    kz: 'еден жуамын',
                    sound: 'eden_zhuamyn.mp3',
                    image: 'eden_zhuamyn.png'
                }, {
                    ru: 'лодка',
                    kz: 'қайық',
                    sound: 'qajyq.mp3',
                    image: 'qajyq.png'
                }, {
                    ru: 'машина',
                    kz: 'мәшине',
                    sound: 'mashine.mp3',
                    image: 'mashine.png'
                }, {
                    ru: 'самолёт',
                    kz: 'ұшақ',
                    sound: 'ushaq.mp3',
                    image: 'ushak.png'
                }, {
                    ru: 'звезда',
                    kz: 'жұлдыз',
                    sound: 'zhuldiz.mp3',
                    image: 'zhuldyz.png'
                }, {
                    ru: 'жайлау',
                    kz: 'жайлау',
                    sound: 'zhajlau.mp3',
                    image: 'zhajlau.png'
                }, {
                    kz: 'қала',
                    ru: 'город',
                    image: 'kala.png',
                    sound: 'kala.mp3'
                }, {
                    ru: 'лес',
                    kz: 'орман',
                    sound: 'orman.mp3',
                    image: 'orman.png'
                }, {
                    ru: 'улица',
                    kz: 'көше',
                    image: 'koshe.png',
                    sound: 'koshe.mp3'
                }],
                inputs: [{
                    ru: 'замечательно',
                    kz: 'керемет',
                    sound: 'keremet.mp3'
                }, {
                    ru: 'здоровье',
                    kz: 'денсаулық',
                    sound: 'densaulyq.mp3'
                }],
                sentences: [{
                    ru: 'Какова природа Алаколя ?',
                    kz: 'Алакөл табиғаты қандай ?',
                    sound: 'alakol_tabigaty_qandaj.mp3'
                }, {
                    ru: 'Природа Алаколя замечательна!',
                    kz: 'Алакөл табиғаты керемет!',
                    sound: 'alakol_tabigaty_keremet.mp3'
                }, {
                    ru: 'Что ты делал на Алаколе ?',
                    kz: 'Алакөлде не істедің ?',
                    sound: 'alakolde_ne_isteding.mp3'
                }, {
                    ru: 'В Алаколе я  купался.',
                    kz: 'Алакөлде суға түстім.',
                    sound: 'alakolde_suga_tustim.mp3'
                }],
                listens: [{
                    kz: 'Алакөл',
                    sound: 'alakol.mp3'
                }],
                multi: [{
                    task: 'Купание полезно для здоровья.',
                    right: ['Суға түсу денсаулыққа пайдалы.'],
                    wrong: ['Тауға шығу пайдалы.', 'Қымыз денсаулыққа пайдалы.']
                }]
            },
            {
                title: "Қайталау 8",
                words: [{
                    ru: 'хожу пешком',
                    kz: 'жаяу жүремін',
                    sound: 'zhayau_zhuremin.mp3',
                    image: 'zhayau_zhuremin.png'
                }, {
                    kz: 'шаңғы тебемін',
                    ru: 'катаюсь на лыжах',
                    image: 'shangy_tebemin.png',
                    sound: 'shangy_tebemin.mp3'
                }, {
                    ru: 'играю в мячь',
                    kz: 'доп ойнаймын',
                    sound: null,
                    image: 'dop_ojnajmyn.png'
                }, {
                    ru: 'убираюсь дома',
                    kz: 'үй жинаймын',
                    sound: null,
                    image: 'uj_zhinajmyn.png'
                }],
                inputs: [{
                    ru: 'замечательно',
                    kz: 'керемет',
                    sound: 'keremet.mp3'
                }, {
                    ru: 'биік тау',
                    kz: 'высокая гора',
                    sound: 'biik_tau.mp3'
                }],
                sentences: [{
                    ru: 'Ты был в Алаколе ?',
                    kz: 'Сен Алакөлде болдың ба ?',
                    sound: 'sen_alakolde_boldyngba.mp3'
                }, {
                    ru: 'Да, я был в Алаколе.',
                    kz: 'Иә, мен Алакөлде болдым.',
                    sound: 'ia_men_alakolde_boldym.mp3'
                }, {
                    ru: 'Что делал в Бурабае ?',
                    kz: 'Бурабайда не істедің ?',
                    sound: 'burabajda_ne_isteding.mp3'
                }, {
                    ru: 'В Бурабае я поднимался в горы.',
                    kz: 'Бурабайда тауға шықтым.',
                    sound: 'burabajda_tauga_shyqtym.mp3'
                }],
                listens: [{
                    kz: 'Алакөл',
                    sound: 'alakol.mp3'
                }],
                multi: [{
                    task: 'гуляю',
                    right: ['қыдырамын'],
                    wrong: ['жүгіремін', 'секіремін']
                }, {
                    task: 'Природа Бурабая замечательна!',
                    right: ['Бурабай табиғаты керемет!'],
                    wrong: ['Ол Бурабайда демалды.', 'Алакөл табиғаты керемет!']
                }, {
                    task: 'Путешествие было интересным.',
                    right: ['Саяхат қызықты болды.'],
                    wrong: ['Тауға шығу қызықты.', 'Маған Бурабай ұнады.']
                }]
            }
        ]
    }
];