const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `oceanus_the_sword_of_light`
    },
async execute(interaction, client){
    const embed = new EmbedBuilder()
    .setTitle(`빛의 검 오케아노스`)
    .setColor(1752220)
    .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTA5MDlfMjUw/MDAxNTY3OTk3MDc1MDU5.4nBc8BBBB4riL2wVerR0pDXfxSqbEOnMKpBqELzO42Ag.KuW_VrUEmIgBtIqJr13TX3mnJnMRftQcYOCPG9tRLKcg.JPEG/%EB%B9%9B%EC%9D%98%EA%B2%80%EC%98%A4%EC%BC%80%EC%95%84%EB%85%B8%EC%8A%A4resized.jpg?type=w740')
    .addFields([
        {
            name: `조합법`,
            value: `\n\n수호의 검 그리세우스 \n 빛의 결정 \n 정화의 증표 \n 순수의 강철`,
            inline: true
        }
    ]);
    const button = new ButtonBuilder()
    .setCustomId('atricia_the_sword_of_dreams')
    .setLabel(`몽환의 검 아트리샤`)
    .setStyle(ButtonStyle.Primary);
    await interaction.update({
        embeds: [embed],
        components: [new ActionRowBuilder().addComponents(button)],
        ephemeral: true
        
    });
}
}