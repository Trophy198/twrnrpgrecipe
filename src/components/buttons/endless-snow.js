const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `endless_snow`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`엔드리스 스노우`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfNjQg/MDAxNjQyMjkyNzM2NTIy.-4rRYJXarcLYtga7Ix4iAUWGs07zVgvOIFZSZvD0he8g.ilY7Gk3889Y41GJmJ3x-DFjmb6K7RmGEHnbv_JpawGgg.JPEG/BTNStaff.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n트리플 스노우 \n 영원의 잔 \n 탐욕의 저주 \n 화염의 가호 \n 바다의 가호 \n 피의 결정 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('triple_snow')
        .setLabel(`트리플 스노우`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}