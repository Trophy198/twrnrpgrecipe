const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `eternal_flame`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`이터널 플레임`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTFfMjU3/MDAxNTg5MTI4ODc1MjQ1.QVBrsUQ6C0WQvJIeHUONcur6bghTjcwqhlKFNg964Ncg.o7c514b-qU_bJt1aTBGcpllIcVbCaso_zke7tUVvtoQg.JPEG/BTNEternalFlame.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n헬플레임 \n 필멸의 활 그리베돈 \n 집념의 장막 \n 파괴의 반지 \n 화산의 심장 \n 영원의 잔 \n 빛나는 유적의 조각`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('hellflame')
        .setLabel(`헬플레임`)
        .setStyle(ButtonStyle.Secondary);
        const button2 = new ButtonBuilder()
        .setCustomId('griveddon_the_bow_of_certain_destruction')
        .setLabel(`필멸의 활 그리베돈`)
        .setStyle(ButtonStyle.Secondary);
        const button3 = new ButtonBuilder()
        .setCustomId('spirit_flame')
        .setLabel(`스피릿 플레임`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button2,button3)],
            ephemeral: true
            
        });
    }
}