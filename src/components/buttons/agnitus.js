const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `agnitus`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`사자의 활 아그니투스`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAxMTZfMjEx/MDAxNjQyMjkyNzcxOTI1.zGbSUC-K_Iv_-_LXtUydPw6jAu0f88UOPknlKWVqfb8g.n2TVDuiS6YyGAbn3dyQq9ElIQrzdyDihSKC9uxEBaWAg.JPEG/Bow.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n신궁 피레스 \n 디 엔더 \n 신의 금속 \n 혼돈이 깃든 파편 \n 바다의 가호 \n 지옥의 파편 \n 희생의 문장`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('pheles_the_bow_of_god')
        .setLabel(`신궁 피레스`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('d_ender_b')
        .setLabel(`디 엔더`)
        .setStyle(ButtonStyle.Secondary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1)],
            ephemeral: true
            
        });
    }
}