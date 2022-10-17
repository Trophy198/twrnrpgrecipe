const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');
const { execute } = require('./splitting-of-the-sky-and-earth');

module.exports = {
    data: {
        name: `aglaia_the_spear_of_heavenly_flows`
    },
async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`천류의 창 아글라이아`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDNfMTA4/MDAxNTIyNzU4OTg2MjI5.ulQV0CMJkI6ZoSyCEJhquknNx0he94glyXi4WR5xGVMg.iGvIWPPwHR7rJ5bU0uNxrMJi2Td7JPIDaQI5InAINJQg.JPEG.darkprank/BTNSpear03.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n빙결의 창 오켈렌크 \n 폭풍우의 화관 \n 블러드 오브 \n 악몽의 기운 \n 폭풍의 문장`,
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