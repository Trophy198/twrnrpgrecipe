const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `heartseeker`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`심장추적자`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA4MDJfOTIg/MDAxNTAxNjIzMjQyMTEx.eXXP_R27xbioju7dHJEhN2I6YBLV1JLNOtS3_B0vxJgg.t4XFGcOfwQsSGRXI2hjE_66Q5f3eSNMZkfxUpy_DRlkg.PNG.lbu_diablo/%EC%8B%AC%EC%9E%A5%EC%B6%94%EC%A0%81%EC%9E%90.png?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n추적자 \n 불로의 심장 \n 심연의 기운 \n 영혼의 돌 \n 드래곤 하트 \n 매드 심볼`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('pheles_the_bow_of_god')
        .setLabel(`신궁 피레스`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
    }
}