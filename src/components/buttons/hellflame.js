const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `hellflame`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`헬플레임`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA3MjVfMTI2/MDAxNTAwOTQwMjYwMzEx.ppDf7Pxrne-UU2n7O_s4I_EZR9SRIiE52PZALZATS8sg.udHVaJOTcUMGRyTE2yPvlb8MFb8URSUT947CzSM8_mMg.JPEG.darkprank/BTNinv_weapon_crossbow_35.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n플레임 익스플로전 \n 작은 분노의 조각 \n 용의 눈 \n 정화의 증표 \n 대자연의 정수 \n 망각의 파편`,
                inline: true
            }
        ]);
        
        const button = new ButtonBuilder()
        .setCustomId('eternal_flame')
        .setLabel(`이터널 플레임`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}