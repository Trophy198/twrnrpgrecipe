const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');
const { execute } = require('./splitting-of-the-sky-and-earth');

module.exports = {
    data: {
        name: `tiberius_the_spear_of_lightning`
    },
async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`번개의 창 티베리우스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MDlfNDQg/MDAxNTY3OTk2OTY3MzU1._lRrbP6EIjKwql-qoBRznDdRx3SJK6IyW9S6KhZdiB0g.PXsdzBpksIlOirqRgGNyHAyQOSeIDplCfBrWlQ5JPEcg.JPEG/%EB%B2%88%EA%B0%9C%EC%9D%98%EC%B0%BD%ED%8B%B0%EB%B2%A0%EB%A6%AC%EC%9A%B0%EC%8A%A4resized.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n피의 진혼창 상귀엘 \n 신의 금속 \n 정화의 증표 \n 바람의 조각 \n 폭풍의 문장`,
                inline: true
            }
        ]);
       
        const button = new ButtonBuilder()
        .setCustomId('splitting_of_the_sky_and_earth')
        .setLabel(`천지개벽`)
        .setStyle(ButtonStyle.Primary);

        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
}
}