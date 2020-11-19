var app = new Vue(
    {
        el: '#root',
        data: {
            user: [
                {
                    name: 'Marco',
                    avatar: '_io'
                }

            ],

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Gianfranco',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },

                {
                    name: 'Gabriele',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },

                {
                    name: 'Rodrigo',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },
                {
                    name: 'Paolo',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdown: false
                        }
                    ],
                },


            ],
            newMessage: '',
            search_text: '',
            contactActive: 0,
            messageActive: 0
        },

        methods: {
            getMessageClass(index){
                //Copio in thisContact parte della struttura relativa al contatto attivo
                let thisContact = this.contacts[this.contactActive];
                //Estraggo lo status in messageClass
                let messageClass = thisContact.messages[index].status;
                //Lo faccio ritornare
                return messageClass;
            },

            change(index){
                //Assegno a contactActive il valore index
                this.contactActive = index;
            },

            changeMessageActive(index){
                //Traccio il messaggio corrente.
                this.messageActive = index;

                //Copio in thisMessage parte della struttura relativa al contatto attivo
                let thisMessage = this.contacts[this.contactActive];

                //Se la struttura relativa al contatto attivo, nell'array
                //messages in posizione messageActive, l'elemento dropdown è true
                if(thisMessage.messages[this.messageActive].dropdown == true){
                    //Modificalo false
                    thisMessage.messages[this.messageActive].dropdown = false;

                } else {
                    //Modificalo true
                    thisMessage.messages[this.messageActive].dropdown = true;
                }

            },


            add_message(element){
                //Copio parte di struttura relativa al contatto attivo
                let thisContact = this.contacts[this.contactActive];
                //Copio in thisMessages parte di struttura relativa all'array messages
                let thisMessages = thisContact.messages;
                //Pusho nell'array messages l'oggetto completo contenente anche il messaggio.
                thisMessages.push(
                    {
                        date: '10/01/2020 15:30:55',
                        message: element,
                        status: 'sent',
                        dropdown: false
                    }
                );

            },

            add_message_friend() {
                //Copio parte di struttura relativa al contatto attivo
                let thisContact = this.contacts[this.contactActive];
                //Copio in thisMessages parte di struttura relativa all'array messages
                let thisMessages = thisContact.messages;
                //Pusho nell'array messages l'oggetto completo contenente anche il messaggio.
                thisMessages.push(
                    {
                        date: '10/01/2020 15:30:55',
                        message: "Ok.",
                        status: 'received',
                        dropdown: false
                    }
                );
            },

            search(){
                //Scorro il vettore contacts
                for (var i = 0; i < this.contacts.length; i++) {
                    //Se l'elemento name relativo al contatto i (in toLowerCase) include la stringa tracciata (in toLowerCase)
                    if (this.contacts[i].name.toLowerCase().includes(this.search_text.toLowerCase())) {
                        //Allore rendi true il parametro visible
                        this.contacts[i].visible = true;
                    } else {
                        //Altrimenti impostalo false
                        this.contacts[i].visible = false;
                    }
                }
            },

            deleteMessage(index){
                //Assegno a messageActive il valore dell'index
                this.messageActive = index;
                //Copio parte di struttura relativa al contatto attivo in thisMessage
                let thisMessage = this.contacts[this.contactActive];
                //Selezionando la parte relativa al contatto attivo, nell'array messages, applico
                //splice() a partire dal messaggio attivo, cancellandolo.
                thisMessage.messages.splice(this.messageActive, 1);
            }

        }
    }
);
