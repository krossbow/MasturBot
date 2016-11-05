const Discord = require('discord.js');
const client = new Discord.Client();

const __name__ = "Masturbot";
const prefix = __name__[0] + "!";

const helps = [
	["help", "sends the author of the command's message this help message."],
	["kkk", "sends a message to the command's channel with 2000 \"k\"s."],
	["ping", "pong", "sends a message to the command's channel saying \"pong\"."]
];

var help = `Help for ${__name__}:\n
Usage: ${prefix} [COMMAND] in a channel the bot is logged into. \n
[COMMAND]s: \n`;

for(i = 0; i < helps.length; i++)
	help += helps[i][0] + ": " + helps[i][1] + "\n";

delete i;

help += "\nUse help [COMMAND] for more information on a specific command.";

client.on('ready', () => {
	console.log("Bot running, press CTRL+C to quit.");
});

client.on('message', message => {
	if(message.content.startsWith(prefix))
	{
		cmd = message.content.substring(prefix.length);
		if(cmd.startsWith("help"))
		{
			args = message.content.split(" ");
			console.log(args);
			if(args[1])
			{
				for(i = 0; i < helps.length; i++)
					if(helps[i][0] === args[1] && helps[i][2])
						message.author.sendMessage(helps[i][0] + ": " + helps[i][2]);
			}

			else
				message.author.sendMessage(help);
		}

		if(cmd.startsWith("kkk"))
			message.channel.sendMessage("k".repeat(2000));

		if(cmd.startsWith("ping"))
			message.reply(" pong");
	}
});

var cli_help = function()
{
	console.log("Usage: [TOKEN/EMAIL] [PASSWORD].");
};

if(process.argv[2])
	client.login(process.argv[2]);
else
	cli_help();
