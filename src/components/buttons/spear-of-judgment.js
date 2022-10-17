const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');
const { execute } = require('./splitting-of-the-sky-and-earth');

module.exports = {
    data: {
        name: `spear_of_judgment`
    },
 async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`심판의 창(Spear of Judgment)`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMDVfMjkx/MDAxNjQxMzQwMDM5MTgy.WHS3Kd2cGRsj_ehskyhUqeFIbOd3G0DAceQXRuQnfdQg.4nso41j0JvB3G4M4UfYnGpf7Kt6xltmOHdHd7QrHB78g.JPEG/BTNItem_Melee014.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n천지개벽 \n 하늘의 족쇄 \n 폭풍의 결정 \n 화염의 결정 \n 바다의 결정 \n 군주의 징표 \n 희생의 문장`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('splitting_of_the_sky_and_earth')
        .setLabel(`천지개벽`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
 }
}