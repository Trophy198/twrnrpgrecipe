const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `heartrender_b`
    },
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`하트렌더(Heartrender)`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDVfMjc2/MDAxNjQxMzM5OTk2OTky.J9M1kADBB6A7iMC5cK76iP_k-v7GdOUf3ou74D4WwpIg.2sH2D8uGNYb99FZJ0Y0mkr0Pv7TypuYoAR0tF9B8Z5Ig.JPEG/HR.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n디 엔더 \n 파괴의 반지 \n 핏빛 장미/희생의 문장 \n 폭풍의 결정 \n 영혼의 파편 \n 영혼의 꽃/피의 결정`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('d_ender_b')
        .setLabel(`디 엔더`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
        
    }
}