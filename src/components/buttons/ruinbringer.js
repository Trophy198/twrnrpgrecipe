const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');
const { execute } = require('./d_ender');

module.exports = {
    data: {
        name: `ruinbringer`
    },
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`루인브링어`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA3MjVfOTkg/MDAxNTAwOTQ3NTg3NTUy.9ASXrzquuT1Zi6T1ZrDLlafB8kE9hOltYoMM_t6uqA0g.Z-gZETgD2MWzi3uAzjTK-LpQdZX5jz-wtTq4l-qCCu8g.JPEG.darkprank/BTNinv_sword_1h_grimbatolraid_d_02.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n데스브링어 \n 암흑의 결정 \n 불타는 뼛조각 \n 위서의 한 페이지 \n 스켈레톤 본 \n 매드 심볼`,
                inline: true
            }
        ]);
        ;
        
        const button = new ButtonBuilder()
        .setCustomId('calamity')
        .setLabel(`캘러미티`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}