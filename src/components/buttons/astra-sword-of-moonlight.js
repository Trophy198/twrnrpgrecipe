const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `astra_sword_of_moonlight`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`월광의 검 아스트라`)
        .setColor(1752220)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA5MjJfMTEy/MDAxNjAwNzQxNjg1ODA3.HMVIcDkxzMJErCRsZiUAJ6JE369yWdDjvGbKsJ0AG98g.5VuAc2icH4Ps_uQxz0yEFNp1DmOUWbG7gmgGMDH8aHgg.JPEG/BTNSwordOfMoon.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n천영의 환검 미크로네이서 \n 디 엔더 \n 신의 금속 \n \폭풍의 결정 \n 화염의 결정 \n 바다의 결정 \n 영혼의 파편`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('meacronacer')
        .setLabel(`천영의 환검 미크로 네이서`)
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