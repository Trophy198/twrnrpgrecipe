const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `spirit_flame`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`스피릿 플레임`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjA3MjZfMjMx/MDAxNjU4ODIxMDYwODgy.8r029Ar08VcPSjxeXZYX_JyBUcdBgflloHr1Z-l9SoMg.uLT6srHFazI3uDwMghiNx0lo4q75AFBbOzQ9laN4mhkg.JPEG/bow.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n이터널 플레임 \n 지옥의 파편 \n 피의 결정 \n 대지의 결정 \n 뒤틀린 유적의 조각 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('eternal_flame')
        .setLabel(`이터널 플레임`)
        .setStyle(ButtonStyle.Secondary);

        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}