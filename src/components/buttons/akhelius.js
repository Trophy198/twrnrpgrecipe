const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `akhelius`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`양면의 지팡이 아켈리우스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDdfMjAy/MDAxNjQxNTA2MDAxNDIy.-qo3QnShTe8rGdIdY8zV66ar1rzVEcpZOfIQBSggTEcg.YaC9bIS1rDjO4DbOojqU3Oljpo63qRd74ShJNR4ZoPgg.JPEG/BTNItem_Staff022.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n선혈빛 증오 \n 핏빛 장미 \n 화염의 결정 \n 바다의 결정 \n 피의 결정 \n 대지의 결정`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('crimson_hatred')
        .setLabel(`선혈빛 증오`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}