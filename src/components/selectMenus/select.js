const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder, messageLink } = require('discord.js');
const { execute } = require('../../commands/tools/list2');

module.exports = {
    data: {
        name: `select`
    },
    async execute(interaction,message ,client) {
        const selectedValue = interaction.values[0];
        const embed = new EmbedBuilder()
        .setTitle(`디 엔더`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfMTE4/MDAxNTQ3ODU3MDE2MDMw.G-3FygADAzKRODeURoPIGIBR7N5e57HmnZKvWrbo5VQg.Oos8crtDDC4NFLL-wZK-KdTwd1_2NSD2iEr1fS6ha9Yg.JPEG.darkprank/The20Ender.jpg?type=w740')
        .addFields([
            {
                name: `완제 드랍`,
                value: `\n\n레이드 : 데스 핀드`,
                inline: true
            }
        ]);
        
       if (selectedValue === "power_of") {
            await interaction.update({
                embeds: [embed],
                
            });

        }
    },
};