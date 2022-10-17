const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `atricia_the_sword_of_nightmares`
    },
async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle(`악몽의 검 아트리샤`)
    .setColor(0x18e1ee)
    .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfOTkg/MDAxNjQyMjkyNjI3MzU5.j0BzAxvnXhkObVau3-ViDG3y-WcNj1eHEsgJOCLavsUg.qrr_qczArcgTEs9UecMlXArU1SGS9_1v_o97LZBg9Tgg.JPEG/BTNWeapon.jpg?type=w740')
    .addFields([
        {
            name: `조합법`,
            value: `\n\n몽환의 검 아트리샤 \n 바다의 결정 \n 영혼의 파편 \n 피의 결정 \n 희생의 문장 \n 뒤틀린 유적의 조각`,
            inline: true
        }
    ]);
    const button = new ButtonBuilder()
        .setCustomId('atricia_the_sword_of_nightmares')
        .setLabel(`몽환의 검 아트리샤`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
}
}