const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `pheles_the_bow_of_skies`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`창공의 활 피레스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfMjQ2/MDAxNTIzMjkxOTcwNzk0.b26mA774XNY2T3rN09f-vnT4hsvUQ6Zv_dHRfLEi9_wg.g101w3sGxaZxZymnuEcwKzYAl6doiPdbyCXbAaDQSfEg.JPEG.darkprank/BTNBow15.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n바람의 궁 피레스 \n 정령의 구슬 \n 바람의 조각 \n 폭풍의 문장`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('pheles_the_bow_of_god')
        .setLabel(`신궁 피레스`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}