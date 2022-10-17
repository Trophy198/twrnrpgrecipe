const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `atricia_the_sword_of_dreams`
    },
async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle(`몽환의 검 아트리샤`)
    .setColor(1752220)
    .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MjVfMzMg/MDAxNTI0NTg1NjAxODc1.y5fan4Rn5zyiwbuELf81jJCofH3D8CSLumgJ1lNcyrgg.Fs1oEsRZ6QtIAf5RRK_RXQ0zt95WxVjpOmEedchT_ngg.PNG.darkprank/BTNinv_sword_124.png?type=w740')
    .addFields([
        {
            name: `조합법`,
            value: `\n\n빛의 검 오케아노스 \n 독의 환상검 라크트리샤 \n 화염의 결정 \n 폭풍의 결정 \n 암흑의 결정 \n 신의 금속 \n 죽음의 창두`,
            inline: true
        }
    ]);
    const button = new ButtonBuilder()
        .setCustomId('oceanus_the_sword_of_light')
        .setLabel(`빛의 검 오케아노스`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('laktrisha_sword_of_poison')
        .setLabel(`독의 환상검 라크트리샤`)
        .setStyle(ButtonStyle.Secondary);
        const button2 = new ButtonBuilder()
        .setCustomId('atricia_the_sword_of_nightmares')
        .setLabel(`악몽의 검 아트리샤`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1,button2)],
            ephemeral: true
            
        });
}

}
