const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `bloody_hatred`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`핏빛 증오`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfMjUw/MDAxNTAxNjIzMTY3ODU5.9dNCaI3yjM-CTUtyhNCv7y_mtOpJ0xjdY5XGIzrbdZ8g.qCsDUgu3tQ2zw-Y1otuK-G_XmBhVpev6IGxgZTSoGNUg.PNG.lbu_diablo/%ED%95%8F%EB%B9%9B%EC%A6%9D%EC%98%A4.png?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n증오 \n 크림슨 펌킨 로드 \n 블러드 오브 \n 암흑의 날개 조각 \n 백작의 낡은 망토 \n 다크 크리스탈`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('crimson_hatred')
        .setLabel(`선혈빛 증오`)
        .setStyle(ButtonStyle.Primary);
        const button2 = new ButtonBuilder()
        .setCustomId('armageddon')
        .setLabel(`아마겟돈`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button2)],
            ephemeral: true
            
        });
    }
}