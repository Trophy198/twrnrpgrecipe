const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `griveddon_the_bow_of_certain_destruction`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`필멸의 활 그리베돈`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxNzA5MDNfNDIg/MDAxNTA0Mzg5NzMxOTQ4.S0UV4zoEXrQ8M3M7xSsYKwvUWqMwnrZO_b1lbMHbH-cg.XTsnpkLStINHewT030vxmA_m6w57sw_fws4DUXNvEVAg.JPEG.darkprank/BTNItem_Bow002.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n천 마궁 이드렉트 \n 불타는 뼛조각 \n 대자연의 정수 \n 마나 오브 \n 타락의 결정 \n 망각의 구슬/스켈레톤 본`,
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