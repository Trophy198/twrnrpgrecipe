const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `pheles_the_bow_of_god`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`신궁 피레스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfNjcg/MDAxNTIzMjkxNTYyODQw.AtIs4BJUNt8YQjdrQLzQKQjFEbbYZtgkODOMu_0TXDIg.VHgLd3qdHLp1qDTl18U-FosLPOkRlNRql03nkJtNQWUg.JPEG.darkprank/BTNinv_weapon_bow_49.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n창공의 활 피레스 \n 심장추적자 \n 폭풍의 결정 \n 죽음의 창두 \n 안티 매터 \n 바람의 조각 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('pheles_the_bow_of_skies')
        .setLabel(`창공의 활 피레스`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('heartseeker')
        .setLabel(`심장추적자`)
        .setStyle(ButtonStyle.Secondary);
        const button2 = new ButtonBuilder()
        .setCustomId('agnitus')
        .setLabel(`사자의 활 아그니투스`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1,button2)],
            ephemeral: true
            
        });
    }
}