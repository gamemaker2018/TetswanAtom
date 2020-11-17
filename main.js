const Discord = require('discord.js');
const { parse } = require('path');

const client = new Discord.Client();

const prefix ='*';
client.once('ready', () =>{
    console.log('Tetsuwan Atom is online!')
})
.setMaxListeners(500)
client.on('message', message => {
	if (message.content === '-ping') {
		message.channel.send('Pong.');
    }
    
    
    });
    client.on('message', message => {
        if (message.content === '!anime news') {
            message.channel.send('https://www.animenewsnetwork.com/');
        }
        
        
        });
        client.on('message', message => {
            if (message.content === '!top anime') {
                message.channel.send('https://www.imdb.com/list/ls092785929/');
            }
            
            
            });
            client.on('message', message => {
                if (message.content === '!shonen jump') {
                    message.channel.send('https://www.viz.com/shonenjump');
                }
                
                
                });
                client.on('message', message => {
                    if (message.content === '!covid cases') {
                        message.channel.send('https://coronavirus.jhu.edu/map.html');
                    }
                    
                    
                    });
                    client.on('message', message => {
                        if (message.content === '!twitch') {
                            message.channel.send('https://www.twitch.tv/');
                        }
                        
                        
                        });
                        client.on('message', message => {
                            if (message.content === '!youtube') {
                                message.channel.send('https://www.youtube.com/');
                            }
                            
                            
                            });
                            client.on('message', message => {
                                if (message.content === '!reddit') {
                                    message.channel.send('https://www.reddit.com/');
                                }
                                
                                
                                });
                                client.on('message', message => {
                                    if (message.content === '!weather') {
                                        message.channel.send('https://www.bbc.com/weather');
                                    }
                                    
                                    
                                    });
                                    client.on('message', message => {
                                        if (message.content === '!time') {
                                            message.channel.send('https://time.is/');
                                        }
                                        
                                        
                                        });
                                        client.on('message', message => {
                                            if (message.content === '!spotify') {
                                                message.channel.send('https://open.spotify.com/');
                                            }
                                            
                                            
                                            });
                                            client.on('message', message => {
                                                if (message.content === '!insta') {
                                                    message.channel.send('https://www.instagram.com/');
                                                }
                                                
                                                
                                                });
                                                client.on('message', message => {
                                                    if (message.content === '!twitter') {
                                                        message.channel.send('https://twitter.com/home');
                                                    }
                                                    
                                                    
                                                    });
                                                    client.on('message', message => {
                                                        if (message.content === '!news') {
                                                            message.channel.send('https://www.bbc.com/');
                                                        }
                                                        
                                                        
                                                        });
                                                        client.on('message', message => {
                                                            if (message.content === '!google') {
                                                                message.channel.send('https://www.google.com/');
                                                            }
                                                            
                                                            
                                                            });
                                                            client.on('message', message => {
                                                                if (message.content === '!yahoo') {
                                                                    message.channel.send('https://in.yahoo.com/');
                                                                }
                                                                
                                                                
                                                                });
                                                                client.on('message', message => {
                                                                    if (message.content === '!wikipedia') {
                                                                        message.channel.send('https://www.wikipedia.org/');
                                                                    }
                                                                    
                                                                    
                                                                    });
                                                                    client.on('message', message => {
                                                                        if (message.content === '!wikihow') {
                                                                            message.channel.send('https://www.wikihow.com/Main-Page');
                                                                        }
                                                                        
                                                                        
                                                                        });
                                                                        client.on('message', message => {
                                                                            if (message.content === '!meme') {
                                                                                message.channel.send('https://www.reddit.com/r/dankmemer/');
                                                                            }
                                                                            
                                                                            
                                                                            });
                                                                            client.on('message', message => {
                                                                                if (message.content === '!manit meme') {
                                                                                    message.channel.send('Manit: guys we have a bio test today.1 hour later: In bio class Teacher:okay we are correcting our work today.');
                                                                                }
                                                                                
                                                                                
                                                                                });
                                                                                client.on('message', message => {
                                                                                    if (message.content === '!dragon ball author') {
                                                                                        message.channel.send('Akira Toriyama');
                                                                                    }
                                                                                    
                                                                                    
                                                                                    });
                                                                                    client.on('message', message => {
                                                                                        if (message.content === '!naruto author') {
                                                                                            message.channel.send('Masashi Kishimoto');
                                                                                        }
                                                                                        
                                                                                        
                                                                                        });
                                                                                        client.on('message', message => {
                                                                                            if (message.content === '!My Hero Academia author') {
                                                                                                message.channel.send('Kōhei Horikoshi');
                                                                                            }
                                                                                            
                                                                                            
                                                                                            });
                                                                                            client.on('message', message => {
                                                                                                if (message.content === '!Bleach author') {
                                                                                                    message.channel.send('Tite Kubo');
                                                                                                }
                                                                                                
                                                                                                
                                                                                                });
                                                                                                client.on('message', message => {
                                                                                                    if (message.content === '!Fairy Tail author') {
                                                                                                        message.channel.send('Hiro Mashima');
                                                                                                    }
                                                                                                    
                                                                                                    
                                                                                                    });
                                                                                                    client.on('message', message => {
                                                                                                        if (message.content === '!crunchy roll') {
                                                                                                            message.channel.send('https://www.crunchyroll.com/');
                                                                                                        }
                                                                                                        
                                                                                                        
                                                                                                        });
                                                                                                        client.on('message', message => {
                                                                                                            if (message.content === '!give me coins') {
                                                                                                                message.channel.send('pls give @gamemaker2018 all');
                                                                                                            }
                                                                                                            
                                                                                                            
                                                                                                            });
                                                                                                        
client.login('NzY5OTQzODE5MTg4OTYxMzUy.X5WYDw.DyFAfuDzW92gf8I5mbp8o-dIuH8');