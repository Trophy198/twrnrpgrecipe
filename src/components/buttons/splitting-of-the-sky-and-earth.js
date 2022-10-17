const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `splitting_of_the_sky_and_earth`
    },

    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`천지개벽`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MDNfMjA1/MDAxNTIyNzU4ODYyMjI3.mRNnpJf1DJVfVK2kuk-juvQQfP_rMfsXfFgoGjr7958g.geYjvfZzOvoS7JiVHI0wMot8CL41Xmm-mRoples0W1Yg.JPEG.darkprank/BTNSpear06.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n천류의 창 아글라이아 \n 번개의 창 티베리우스 \n 폭풍의 가호 \n 불로의 심장 \n 죽음의 창두 \n 안티 매터 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('aglaia_the_spear_of_heavenly_flows')
        .setLabel(`천류의 창 아글라이아`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('tiberius_the_spear_of_lightning')
        .setLabel(`번개의 창 티베리우스`)
        .setStyle(ButtonStyle.Secondary);
        const button2 = new ButtonBuilder()
        .setCustomId('spear_of_judgment')
        .setLabel(`심판의 창`)
        .setStyle(ButtonStyle.Primary);
       
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1,button2)],
            ephemeral: true
            
        });

}
}