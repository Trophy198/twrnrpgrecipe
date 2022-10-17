const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `divine_slayer`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`디바인 슬레이어`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMjAyMTlfMTY1/MDAxNjQ1MjIwNjcwMDY1.xyLapCl4qRWy-EuFVR3ZOyXZ-u2Iz1yalCdhLybG9ZYg.BrgdRkRM00ZYggi6bQ9Qz9BCZx-q17xeNqjT-h2hleEg.JPEG/BTNDivineSlayer.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n코즈믹 리퍼 \n 디 엔더 \n 바다의 가호 \n 군주의 징표 \n 영혼의 꽃 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('cosmic_reaper')
        .setLabel(`코즈믹 리퍼`)
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