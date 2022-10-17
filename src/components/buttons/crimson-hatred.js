const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `crimson_hatred`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`선혈빛 증오`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfMjc0/MDAxNTIzMjkyNzU2MDY3.T7FZLSLOyQf_WjvNNCflRhXAbGet8TIkDzFddWoqVNUg.veRM5utvaHPsWPjfBO1b2s6UA4fgHp5naV_sxTmSbbgg.JPEG.darkprank/BTNinv_staff_52.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n핏빛 증오 \n 영혼의 지팡이 \n 드래고닉 오브 \n 화염의 결정 \n 죽음의 창두 \n 암흑의 결정 \n 위서의 한 페이지`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('bloody_hatred')
        .setLabel(`핏빛 증오`)
        .setStyle(ButtonStyle.Secondary);
        const button2 = new ButtonBuilder()
        .setCustomId('akhelius')
        .setLabel(`양면의 지팡이 아켈리우스`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button2)],
            ephemeral: true
            
        });
    }
}