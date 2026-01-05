//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Vở bài tập Tiếng Việt lớp 3',
            img: './images/products/gk1.webp',
            category: 'Giáo khoa',
            price: 15000,
            stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Vật lý lớp 12',
            img: './images/products/gk2.webp',
            category: 'Giáo khoa',
            price: 18000,
            stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sách biên soạn theo chương trình giáo dục phổ thông mới. Sách thuộc bộ sách Chân trời sáng tạo.<br>Nội dung trong sách giúp các em hiểu rõ các định nghĩa, định luật và các định lý cơ bản trong vật lí, cung cấp cho các em những kiến thức chuyên sâu, bổ ích, lí thú và thiết thực, giúp các em hình thành kĩ năng thực hành, kĩ năng vận dụng kiến thức vật lí đã học vào giải quyết vấn đề thực tế.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Ngữ văn lớp 12',
            img: './images/products/gk3.webp',
            category: 'Giáo khoa',
            price: 35000,
            stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sách sẽ giới thiệu đến các em các nội dung hay, bổ ích về môn Ngữ Văn 12. Sách thuộc bộ sách Chân trời sáng tạo.<br>Với cách thể hiện phong phú và lôi cuốn, hình thức trình bày hấp dẫn và thân thiện, cuốn sách được biên soạn theo định hướng phát triển phẩm chất và năng lực học sinh. Các kiến thức trong sách sẽ đến với các em học sinh một cách tự nhiên, bắt nguồn từ thực tế đời sống và giúp các em biết cách giải quyết những vấn đề đặt ra trong cuộc sống.'
        },
        {
            id: 4,
            status: 1, title: 'Toán 11',
            img: './images/products/gk4.webp',
            category: 'Giáo khoa',
            price: 21000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Lịch sử 12',
            img: './images/products/gk5.webp',
            category: 'Giáo khoa',            stock: 50,
            price: 15400,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sách được biên soạn theo chương trình giáo dục phổ thông mới, thuộc bộ sách chân trời sáng tạo. <br> Với việc lựa chọn các nội dung học tập đảm bảo tính chuẩn mực, hiện đại, phong phú và đa dạng; hình thức thể hiện đẹp, có sự kết hợp hài hoà giữa kênh hình và kênh chữ sẽ gây hứng thú học tập giúp các em yêu thích học tập môn lịch sử hơn.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Hóa học 12',
            img: './images/products/gk6.jpg',
            category: 'Giáo khoa',            stock: 50,
            price: 15000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Ngữ văn 11',
            category: 'Giáo khoa',
            img: './images/products/gk7.webp',            stock: 50,
            price: 20000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Vật lí 11',
            img: './images/products/gk8.webp',            stock: 50,
            category: 'Giáo khoa',
            price: 28000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },
        {
            id: 9,
            status: 1, 
            title: 'Ngữ văn 11',
            img: './images/products/gk9.webp',            stock: 50,
            category: 'Giáo khoa',
            price: 29000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố Bộ SGK Lớp 11 - Chân trời sáng tạo tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo. Bộ sách Chân trời sáng tạo hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.'
        },        {
            id: 10,
            status: 1, 
            title: 'Âm nhạc 10',
            img: './images/products/gk10.webp',            stock: 50,
            category: 'Giáo khoa',
            price: 34000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Các em học sinh thân mến!<br>Sách giáo khoa âm nhạc 10 – Bộ sách Chân trời sáng tạo được biên soạn nhằm giúp các em học sinh có nguồn học liệu khoa học, hệ thống, thiết thực và hiện đại để học tập; phát triển các phẩm chất, năng lực chung và năng lực âm nhạc, bồi dưỡng tình yêu âm nhạc và thị hiếu âm nhạc lành mạnh; vừa bảo đảm tính giáo dục phổ thông, phù hợp với điều kiện giáo dục ở các địa phương trong cả nước, vừa đáp ứng nhu cầu định hướng nghề nghiệp của học sinh. CƠ.<br>Nhóm tác giả mong rằng, cuốn sách sẽ mang đến cho các em nguồn học liệu âm nhạc tin cậy, là điểm tựa để các em tự học và phát triển.<br>Chúc các em học tập thành công và đạt được kết quả mong muốn.'
        },
        {
            id: 11,
            status: 1, 
            title: 'Giải thích ngữ pháp tiếng Anh',            stock: 50,
            category: 'Ngoại ngữ',
            img: './images/products/nn1.png',
            price: 125500,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Giải Thích Ngữ Pháp Tiếng Anh</strong><br>Ngữ pháp Tiếng Anh tổng hợp các chủ điểm ngữ pháp trọng yếu mà học sinh cần nắm vững. Các chủ điểm ngữ pháp được trình bày rõ ràng, chi tiết. Sau mỗi chủ điểm ngữ pháp là phần bài tập & đáp án nhằm giúp các em củng cố kiến thức đã học, đồng thời tự kiểm tra kết quả.<br>Sách Giải Thích Ngữ Pháp Tiếng Anh, tác Mai Lan Hương – Hà Thanh Uyên, là cuốn sách ngữ pháp đã được phát hành và tái bản rất nhiều lần trong những năm qua.<br>Giải Thích Ngữ Pháp Tiếng Anh được biên soạn thành 9 chương, đề cập đến những vấn đề ngữ pháp từ cơ bản đến nâng cao, phù hợp với mọi trình độ. Các chủ điểm ngữ pháp trong từng chương được biên soạn chi tiết, giải thích cặn kẽ các cách dùng và quy luật mà người học cần nắm vững. Sau mỗi chủ điểm ngữ pháp là phần bài tập đa dạng nhằm giúp người học củng cố lý thuyết.<br>Hy vọng Giải Thích Ngữ Pháp Tiếng Anh sẽ là một quyển sách thiết thực, đáp ứng yêu cầu học, ôn tập và nâng cao trình độ ngữ pháp cho người học và là quyển sách tham khảo bổ ích dành cho giáo viên.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Luyện nói tiếng Trung Quốc cấp tốc cho người mới bắt đầu - tập 1',
            img: './images/products/nn2.png',
            category: 'Ngoại ngữ',            stock: 50,
            price: 137500,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Luyện nói tiếng Trung Quốc cấp tốc</strong> là bộ giáo trình được biên soạn dành riêng cho sinh viên nước ngoài đến du học ngắn hạn tại Trung Quốc nhằm giúp các em rèn luyện kỹ năng giao tiếp. Bộ giáo trình gồm tổng cộng bảy quyển, được chia làm năm trình độ theo ba cấp (sơ cấp, trung cấp và cao cấp), đáp ứng nhu cầu học tiếng Trung cấp tốc của sinh viên nước ngoài.'
        },
        {
            id: 13,
            status: 1, 
            title: '301 câu đàm thoại tiếng Hoa',
            img: './images/products/nn3.webp',
            category: 'Ngoại ngữ',            stock: 50,
            price: 60000,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Cuốn 301 CÂU ĐÀM THOẠI TIẾNG HOA</strong> có 40 bài và bài ôn tập nhưng đã đề cập đến nhiều đề tài giao tiếp thông thường trong đời sống. Ngôn ngữ trong các bài đó ngắn gọn, trong sáng, mang tính khẩu ngữ rất cao. Hệ thống các điểm ngữ pháp tập trung vào các đặc điểm ngữ pháp tiếng Hoa, hệ thống bài tập đa dạng phong phú, dễ hiểu, dễ luyện tập.<br>Tuy nhiên, vì là giáo trình đàm thoại lại dùng làm giáo trình cơ sở để dạy và học tiếng Hoa giai đoạn ban đầu sẽ khiến cho người học gặp khó khăn trong việc trang bị kiến thức và tiến hành luyện tập về ngữ âm, chữ viết. Mặt khác, giáo trình này soạn cho người nước ngoài nói tiếng Anh nên chưa nhấn mạnh đúng mức đến những điểm ngữ pháp khác tiếng Việt như định ngữ, bổ ngữ…<br>Để giúp người học khắc phục khó khăn nói trên, trong lần dịch lại cuốn sách này, ngoài việc tôn trọng nguyên vẹn nội dung của tài liệu gốc, chúng tôi có thêm một phần giới thiệu ngữ âm tiếng Hoa, chữ Hoa. Sau mỗi bài, chúng tôi bổ sung thêm một bài tập viết các chữ Hoa mới xuất hiện trong bài và bài tập luyện dịch Việt – Hoa.<br>Ở mỗi bài ÔN TẬP có thêm phần “Góc kiến thức” - giới thiệu vài vấn đề về ngôn ngữ và văn hóa Trung Quốc – giúp người học vừa có thêm kiến thức vừa tăng thêm hứng thú học tập. Ngoài ra, còn có các phụ lục hướng dẫn cách tra từ điển và cung cấp một số thông tin hữu ích cho người học như: bộ thủ, tên các tỉnh, thành phố và một số họ thông thường của Việt Nam và Trung Quốc.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Giáo trình Hán Ngữ - tập 2 - quyển 1',
            img: './images/products/nn4.webp',            stock: 50,
            category: 'Ngoại ngữ',
            price: 57000,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Giáo Trình Hán Ngữ - Tập 2 - Quyển 1</strong><br>Đối với người học tiếng Hoa, việc lựa chọn một bộ giáo trình tốt là cơ sở bước đầu cho việc học tốt. Một bộ giáo trình tốt không những phải đảm bảo rèn luyện cho người học tiếng Hoa những kỹ năng ngôn ngữ cơ bản, những tri thức văn hóa ngôn ngữ cần thiết, mà còn phải đảm bảo cơ sở cho việc vận dụng những kỹ năng, tri thức ngôn ngữ đó một cách thiết thực nhất. Bộ “Giáo trình Hán ngữ” của trường Đại học Ngôn ngữ Bắc Kinh (tiền thân là Đại học Ngôn ngữ Văn hóa Bắc Kinh) chính là một bộ giáo trình như thế.<br>Bộ “Giáo trình Hán ngữ” gồm 3 tập, mỗi tập chia làm hai quyển. Mặc dù chia thành 3 giai đoạn riêng, nhưng việc rèn luyện các mặt ngữ âm, từ vựng và ngữ pháp luôn được kết hợp xuyên suốt toàn bộ giáo trình.<br>Đây là bộ giáo trình của khoa Hán ngữ đối ngoại trường Đại học Ngôn ngữ Bắc Kinh, chính vì vậy những tài liệu sử dụng trong giáo trình rất phù hợp với cuộc sống thực tế, cung cấp cho người học những tri thức văn hóa ngôn ngữ thiết thực và bổ ích. Lượng từ vựng phong phú (3.300 từ mới) và cập nhật. Những điểm ngữ pháp được giải thích rõ ràng, dễ hiểu, từ đơn giản đến phức tạp, từng bước nâng cao và đào sâu. Bài luyện ngữ âm xuyên suốt toàn bộ giáo trình. Bài tập đa dạng, được thiết kế một cách khoa học, giúp cho học sinh củng cố và vận dụng những kiến thức đã học. Trong quá trình học tập, bên cạnh việc nắm được những tri thức về mặt ngữ âm, từ vựng, ngữ pháp, nâng cao kỹ năng nghe, nói, đọc, viết, người học sẽ từng bước được trang bị những cơ sở và phương pháp khoa học để vận dụng những tri thức và kỹ năng đó vào trong thực tế, rèn luyện thành kỹ năng giao tiếp ngôn ngữ. Đó chính là mục đích của bộ giáo trình này.<br>Biên dịch bộ giáo trình này, ngoài việc tôn trọng nguyên vẹn nội dung tài liệu gốc, ở mỗi bài, chúng tôi bổ sung thêm vào bài Luyện tập viết chữ cách viết một số bộ thủ cũng như cách viết của các chữ Hán mới xuất hiện ở phần từ mới của bài học. Người học thông qua bài tập này sẽ dễ dàng nắm được cách viết chữ một cách hệ thống. Ngoài ra, chúng tôi còn bổ sung thêm Bài luyện dịch Việt Hoa ở mỗi bài, bài tập này sẽ giúp người học bước đầu luyện tập kỹ năng dịch Việt Hoa của mình. Cuối tài liệu chúng tôi có bổ sung thêm phần Đáp án bài tập để bạn đọc tham khảo.'
        },
        {
            id: 15,
            status: 1, 
            title: 'KIZUKI KIDS - Tiếng Nhật dành cho trẻ em Việt Nam',
            img: './images/products/nn5.jpg', stock: 50,
            category: 'Ngoại ngữ',
            price: 78000,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Sách KIZUKI KIDS - Tiếng Nhật dành cho trẻ em Việt Nam (quyển 1) (Tái bản lần thứ nhất)</strong><br>Cuốn sách xoay quanh những câu chuyện thú vị về cuộc sống hàng ngày của hai nhân vật chính KI&ZU.<br>Bạn KI - nickname của bạn trai người Nhật Bản, 5 tuổi theo bố mẹ sang Việt Nam làm việc và sinh sống gần nhà bạn ZU. Bạn ZU - nickname của bạn gái người Việt Nam, 6 tuổi biết nói tiếng Nhật vì đang được học ở trung tâm tiếng Nhật.<br><strong>Thông qua 4 chủ đề - 10 bài học gần gũi, quen thuộc với các em nhỏ như gia đình, sinh nhật, món ăn...</strong>'
        },
        {
            id: 16,
            status: 1, 
            title: 'Top 1500+ cụm từ tiếng Anh thông dụng theo chủ đề',
            img: './images/products/nn6.webp',stock: 50,
            category: 'Ngoại ngữ',
            price: 154000,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Top 1500+ cụm từ tiếng Anh thông dụng theo chủ đề</strong> là cuốn sách tổng hợp hơn 1500 cụm từ tiếng Anh thông dụng nhất, giúp người học dễ dàng miêu tả các hoạt động trong đời sống hằng ngày.<br>Bạn có biết những cụm từ như: dọn giường, ngoáy tai bằng tăm bông, xì mũi, xả nước bồn cầu,… được diễn đạt như thế nào bằng tiếng Anh không? Bạn đang học tiếng Anh giao tiếp, hoặc ngay cả khi bạn đã có nền tảng tiếng Anh học thuật và có thể nói về những thứ “cao siêu”, bạn có chắc rằng mình sử dụng đúng các cụm từ tiếng Anh để nói về những hoạt động thường nhật tưởng chừng đơn giản?<br>Với cuốn sách Top 1500+ cụm từ tiếng Anh thông dụng theo chủ đề, bạn có thể tự tin nói về mọi hoạt động thường ngày của mình.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Vở luyện viết tiếng Anh Starters',
            img: './images/products/nn7.webp',stock: 50,
            category: 'Ngoại ngữ',
            price: 43000,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Vở Luyện Viết Tiếng Anh Starters (Tập Viết Tiếng Anh Theo Cambridge)</strong><br>Vở in màu và có hình ảnh minh họa kèm theo nên rất dễ nhớ, biến việc học từ vốn dĩ nhàm chán trở nên sinh động hơn và giúp các bé học tiếng Anh một cách hiệu quả hơn.<br>Với bộ luyện viết từ vựng cambridge vừa giúp cho các bé luyện viết. Bé vừa củng cố lại kiến thức từ vựng. Bộ gồm 3 quyển tổng hợp từ vựng theo chương trình cambridge.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Luyện nói tiếng Trung Quốc cấp tốc trình độ sơ cấp - tập 2',
            img: './images/products/nn8.png',
            category: 'Ngoại ngữ',stock: 50,
            price: 129500,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Luyện nói tiếng Trung Quốc cấp tốc</strong là bộ giáo trình được biên soạn dành riêng cho sinh viên nước ngoài đến du học ngắn hạn tại Trung Quốc nhằm giúp các em rèn luyện kỹ năng giao tiếp. Bộ giáo trình gồm tổng cộng bảy quyển, được chia làm năm trình độ theo ba cấp (sơ cấp, trung cấp và cao cấp), đáp ứng nhu cầu học tiếng Trung cấp tốc của sinh viên nước ngoài.'
        },
        {
            id: 19,
            status: 1, 
            title: 'EASY EMAIL WRITING - Viết email thật dễ dàng',
            img: './images/products/nn9.jpg',
            category: 'Ngoại ngữ',stock: 50,
            price: 170500,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sách cung cấp cho bạn kiến thức cơ bản về email, cấu trúc thường được sử dụng khi viết email và hướng dẫn bạn cách viết email trong nhiều trường hợp (để ứng tuyển vào vị trí nào đó trong một công ty, để lên lịch cuộc họp, đặt hàng). Sách còn giới thiệu cách viết thư báo (memo) vốn được dùng trong nội bộ công ty.<br>Với cách trình bày ngắn gọn, dễ hiểu kèm nhiều bài tập thực hành, tài liệu này sẽ giúp bạn nhanh chóng trở thành người viết email thành thạo, chuyên nghiệp.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Giới từ tiếng Anh',
            img: './images/products/nn10.webp',
            category: 'Ngoại ngữ',stock: 50,
            price: 80000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Giới từ tiếng Anh tổng hợp hầu hết các giới từ thường được sử dụng, nhất là các giới từ trong chương trình học tiếng Anh ở cấp phổ thông. Sách gồm 3 phần:<br>Giới từ thông dụng (Common Prepositions)<br>Giới từ theo sau Danh từ, Tính từ và Động từ (Preposition after Nouns, Adjectives & Verbs)<br>Cụm động từ (Prepositional Phrases)<br>Sau mỗi mục lý thuyết có phần bài tập nhằm giúp người học củng cố kiến thức.<br>Ở phần Giới từ thông dụng, ngoài các giới từ chỉ thời gian, nơi chốn và sự chuyển động, chúng tôi còn giới thiệu các giới từ một từ (one-word) và hai từ (two-word). Riêng giới từ phức gồm ba từ (three-word) sẽ được trình bày ở phần Cụm giới từ (Prepositional Phrases).'
        },
        {
            id: 21,
            status: 1, 
            title: 'Cây cam ngọt của tôi',
            category: 'Tiểu thuyết',
            img: './images/products/tt1.jpg',stock: 50,
            price: 102600,
            desc: '<strong>Mô tả sản phẩm</strong><br>Với một đứa trẻ, thế giới không giới hạn trong một bữa ăn, mà thế giới cần có hào quang của tình thương. Bạn có bao giờ cảm thấy bị lạc lõng trong chính ngôi nhà của mình? Một câu chuyện chạm đến tận cùng cảm xúc<br><strong>TÓM TẮT NỘI DUNG SÁCH</strong><br>Nếu tuổi thơ là một món quà, thì với Zezé, đó là một món quà có cả vị ngọt lẫn đắng.<br>Zezé - một cậu bé nghèo năm tuổi tại Brazil, thông minh, lém lỉnh nhưng luôn bị gia đình xem như một đứa trẻ hư. Những trò nghịch ngợm của cậu thường bị trừng phạt bằng đòn roi, nhưng ai biết rằng đằng sau đó là một trái tim khao khát yêu thương?<br>Người bạn duy nhất luôn lắng nghe cậu chính là cây cam ngọt nhỏ bé trong vườn, nơi cậu có thể gửi gắm những bí mật và nỗi buồn của mình. Rồi một ngày, Zezé gặp ông Portuga - một người đàn ông xa lạ nhưng lại là ánh sáng dịu dàng đầu tiên trong cuộc đời đầy bão tố của cậu bé. Ông dạy cậu về lòng nhân ái, về tình yêu thương vô điều kiện - thứ mà Zezé luôn khao khát nhưng chưa từng có được.<br>Nhưng rồi, số phận không cho phép Zezé giữ mãi những hạnh phúc nhỏ nhoi đó…<br>Cây Cam Ngọt Của Tôi không chỉ là câu chuyện của một cậu bé – đó còn là bức tranh về những nỗi đau vô hình của tuổi thơ, về sự khắc nghiệt của cuộc sống nhưng cũng đầy những tia sáng hy vọng.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Người bà tài giỏi vùng SAGA',
            category: 'Tiểu thuyết',
            img: './images/products/tt2.webp',stock: 50,
            price: 128000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Dựa trên nội dung của bộ truyện cùng tên do nghệ sĩ hài Shimada Yoshichi kể về tuổi thơ của mình bên người bà tại vùng đất nghèo khó Saga địa đầu Tây Nam nước Nhật. Akihiro năm đấy còn bé lắm. Mẹ cậu làm ở một quán rượu tại Hiroshima nuôi lớn hai anh em, nhưng Akihiro là một đứa trẻ nũng mẹ hay quấy khóc, cực chẳng đã, mẹ Akihiro đã phải đem cậu bé về cho bà ngoại ở Saga nuôi dưỡng. Người bà nghèo, nghiêm khắc nhưng đầy lòng thương và những con người vùng đất Saga nồng hậu, tốt tính đã đem lại cho Akihiro những ngày tháng ấu thơ vui vẻ, hạnh phúc.<br><i>Đây chỉ là một phần nhỏ trong hành trình của Người Bà Tài Giỏi Vùng Saga – câu chuyện còn ẩn chứa nhiều bất ngờ và kịch tính hơn nữa, chắc chắn sẽ khiến bạn không thể rời mắt.<i>'
        },

        {
            id: 23,
            status: 1, 
            title: 'Totto-chan bên cửa sổ',
            category: 'Tiểu thuyết',
            img: './images/products/tt3.webp',stock: 50,
            price: 98000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Tottochan - một cô bé hiếu động, tò mò, luôn đầy ắp những câu hỏi và năng lượng. Nhưng ở ngôi trường cũ, cô bé bị xem là “học sinh cá biệt” và nhanh chóng bị buộc thôi học. Thế rồi, Tottochan đặt chân đến Tomoe 0 một ngôi trường lạ lùng với những lớp học trong toa xe lửa, nơi không có ghế gỗ xếp thẳng hàng mà là một thế giới tràn đầy sự tự do và yêu thương.<br>Tại đây, dưới sự dìu dắt của thầy hiệu trưởng Kobayashi,<br>Tottochan cùng những người bạn của mình đã có những bài học chưa từng có: học theo cách mình muốn, khám phá thế giới qua chính đôi mắt và cảm xúc của mình. Thay vì bị bó buộc bởi những quy tắc cứng nhắc, các em được khuyến khích phát triển theo cách riêng, trở thành chính mình mà không phải sợ hãi.<br>Nhưng rồi chiến tranh kéo đến, cuốn theo những tiếng cười trong trẻo, làm thay đổi số phận của bao người... Tottochan có còn được tiếp tục những tháng ngày tuyệt đẹp ấy? Và điều gì đã khiến ngôi trường Tomoe trở thành một huyền thoại trong lòng những ai từng biết đến? '
        },

        {
            id: 24,
            status: 1, 
            title: 'Chiến binh cầu vồng',
            img: './images/products/tt4.webp',
            category: 'Tiểu thuyết',stock: 50,
            price: 89000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Tại một hòn đảo nghèo ở Indonesia, mười đứa trẻ nhỏ bé cùng cô giáo và thầy hiệu trưởng tận tâm đang đấu tranh để giữ lại ngôi trường làng nghèo nàn của mình. Mỗi ngày đến lớp là một cuộc chiến, nhưng cũng là một niềm vui, một hy vọng. Giữa bao khó khăn, họ vẫn không từ bỏ, vì với họ, giáo dục là con đường duy nhất để thoát khỏi nghèo đói và vươn tới tương lai.<br>“Chúng tôi có thể nghèo, nhưng chúng tôi có trí tuệ. Và trí tuệ chính là chiếc chìa khóa mở ra cánh cửa thế giới.”<br>Câu chuyện không chỉ là hành trình đến trường mà còn là hành trình tìm kiếm chính mình, với tình bạn, sự dũng cảm và những giấc mơ vươn xa.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Cho tôi xin một vé đi tuổi thơ',
            img: './images/products/tt5.webp',
            category: 'Tiểu thuyết',stock: 50,
            price: 90000,
            desc: '<strong>Mô tả sản phẩm</strong><br>Câu chuyện xoay quanh cu Mùi, Tí sún, Hải cò và Tủn - nhóm trẻ con với những trò nghịch ngợm “nhất quỷ, nhì ma”. Dưới góc nhìn hài hước nhưng cũng đầy sâu sắc, Nguyễn Nhật Ánh không chỉ kể về những trò chơi thơ ấu mà còn mở ra cả một thế giới tuổi thơ chân thực: những buổi trốn ngủ trưa đi thả diều, những lần tức tối vì người lớn áp đặt, hay những rung động đầu đời vụng dại. <br>Nhưng tuổi thơ không kéo dài mãi mãi. Khi lớn lên, ta nhận ra điều từng chán ghét lúc bé lại là thứ ta khao khát nhất khi trưởng thành. Cuốn sách không chỉ khiến bạn cười vì những trò nghịch dại, mà còn lắng lại để suy ngẫm: liệu người lớn có thực sự hiểu trẻ con, hay chỉ áp đặt chúng theo cách mình muốn?'
        },

        {
            id: 26,
            status: 1, 
            title: 'Vượt Côn Đảo',
            category: 'Tiểu thuyết',
            img: './images/products/tt6.webp',
            price: 69500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><i>"Tất cả tù Côn Đảo đều gọi Côn Đảo là địa ngục, một thứ địa ngục trần gian. Nghe người ta nói ở địa ngục, trên có Diêm Vương hung ác, dưới có bọn quỷ sứ đầu trâu mặt ngựa. Để hành hạ người chết, có vạc dầu nấu sôi, sông lúc nhúc mãng xà rắn rết, có chỗ cưa chân xẻ tay, róc thịt chẻ xương. Không biết có địa ngục và địa ngục có những cảnh đó không, nhưng ở Côn Đảo, những cảnh đó không thiếu gì, và còn gấp trăm gấp nghìn thế là khác."</i><br>Vượt Côn Đảo là một tác phẩm nổi tiếng của nhà văn Nguyễn Thị Ngọc Tú, kể về cuộc sống của những người tù chính trị tại Côn Đảo trong thời kỳ kháng chiến chống Pháp. Tác phẩm mang đến những hình ảnh chân thực về cuộc sống khắc nghiệt, tinh thần kiên cường và lòng yêu nước của những người dân Việt Nam.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Anne tóc đỏ dưới chái nhà xanh',
            category: 'Tiểu thuyết',
            img: './images/products/tt7.webp',
            price: 113000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Anne Tóc Đỏ Dưới Chái Nhà Xanh</strong><br>Khi Matthew và Marilla Cuthbert ngỏ lời với một trại trẻ mồ côi để xin một cậu bé về đỡ đần họ tại nông trang Green Gables, cả hai sửng sốt khi thấy bước ra khỏi tàu là một cô bé lắm mồm, tên là Anne.<br>Anne, tóc đỏ, hay gây gổ và lãng mạn vô phương cứu chữa - cô đã xáo trộn cả Green Gable lẫn ngôi làng quanh đó. Nhưng sự hóm hỉnh và thiện tính trong cô lại khiến cô được yêu mến không ngớt, không chỉ với cộng đồng tưởng tượng của Đảo Hoàng tử Edward, mà còn với bao thế hệ độc giả khắp bên kia bờ Đại Tây Dương, suốt một thế kỷ nay, kể từ ngày cuốn Anne Tóc đỏ đầu tiên ra đời năm 1908.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Con chim xanh biếc bay về',
            category: 'Tiểu thuyết',
            img: './images/products/tt8.webp',
            price: 126000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Con Chim Xanh Biếc Bay Về</strong><br>Không giống như những tác phẩm trước đây lấy bối cảnh vùng quê miền Trung đầy ắp những hoài niệm tuổi thơ dung dị, trong trẻo với các nhân vật ở độ tuổi dậy thì, trong quyển sách mới lần này nhà văn Nguyễn Nhật Ánh lấy bối cảnh chính là Sài Gòn – Thành phố Hồ Chí Minh nơi tác giả sinh sống (như là một sự đền đáp ân tình với mảnh đất miền Nam). Các nhân vật chính trong truyện cũng “lớn” hơn, với những câu chuyện mưu sinh lập nghiệp lắm gian nan thử thách của các sinh viên trẻ đầy hoài bão. Tất nhiên không thể thiếu những câu chuyện tình cảm động, kịch tính và bất ngờ khiến bạn đọc ngẩn ngơ, cười ra nước mắt. Và như trong mọi tác phẩm Nguyễn Nhật Ánh, sự tử tế và tinh thần hướng thượng vẫn là điểm nhấn quan trọng trong quyển sách mới này.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Kẻ trộm sách',
            category: 'Tiểu thuyết',
            img: './images/products/tt9.webp',
            price: 224000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Kẻ Trộm Sách</strong><br>Nội dung chính của câu chuyện không lột tả những cảnh chiến trường đẫm máu của thế chiến II, những cảnh giết chóc man rợ… mà đây là câu chuyện về Liesel, cô bé gái mồ côi được làm con nuôi tại phố Thiên Đàng thuộc thành phố Munich. Trong câu chuyện về Liesel, điều ấn tượng nhất với thần chết chính là niềm say mê sách của cô bé. Liesel ăn cắp những cuốn sách bất cứ khi nào có thể.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Bà ngoại tôi gửi lời xin lỗi',
            category: 'Tiểu thuyết',
            img: './images/products/tt10.webp',
            price: 159500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Elsa bảy tuổi – một cô bé khác biệt với trí tưởng tượng rộng lớn và một người bạn duy nhất: bà ngoại. Bà không giống ai, lập dị, hài hước, thậm chí có phần "điên rồ" trong mắt người lớn. Nhưng với Elsa, bà là siêu anh hùng, là người kể những câu chuyện cổ tích về vương quốc bí mật nơi mọi kẻ lạc loài đều tìm thấy chỗ đứng.<br>Rồi một ngày, bà ra đi, để lại cho Elsa một "nhiệm vụ tối mật": giao những bức thư xin lỗi đến những người bà từng làm tổn thương. Nhưng vì sao một người như bà lại phải xin lỗi? Những bí mật được hé mở, những con người tưởng xa lạ lại gắn bó hơn Elsa nghĩ. Và cô bé nhận ra: thế giới này không chỉ có trắng và đen, đúng và sai - mà còn có những câu chuyện dang dở, những nỗi đau giấu kín và những lời chưa kịp nói ra...<br>"Bà nói với cháu rằng tất cả những điều tuyệt vời nhất trên thế gian này đều bắt đầu bằng một câu chuyện."<br>Vậy câu chuyện này sẽ đưa Elsa đến đâu?..'
        },

        {
            id: 31,
            status: 1, 
            title: 'Công tử mồ côi',
            category: 'Tiểu thuyết',
            img: './images/products/tt11.webp',
            price: 70000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><strong>Công Tử Mồ Côi</strong><br><b>MỘT CÂU CHUYỆN TRÀN ĐẦY ẤM ÁP HỨA HẸN SẼ SƯỞI ẤM TRÁI TIM CỦA BẠN ĐỌC!</b><br>Mồ côi cha từ khi còn nhỏ, Cedric Errol sống nương tựa cùng mẹ trong một ngôi nhà nhỏ giữa con phố yên tĩnh ở New York. Những tưởng, cuộc sống của cậu sẽ cứ bình lặng trôi qua như vậy trong tình yêu thương của người mẹ Dấu Yêu, trong sự bầu bạn trìu mến của những người hàng xóm, nhưng rồi, một ngày kia, một tin tức bất ngờ đã xáo trộn hoàn toàn cuộc sống của cậu: Hóa ra cậu chính là Công tử Fauntleroy - cháu trai kiêm người thừa kế duy nhất của bá tước xứ Dorincourt nước Anh.<br>Chào tạm biệt những người bạn thuộc tầng lớp lao động của mình, Cedric háo hức băng qua đại dương đoàn tụ cùng ông nội, hoàn toàn không ngờ tới người ông cậu kính yêu và sùng bái thực chất lại là một nhà quý tộc cay nghiệt, ích kỷ, nóng tính và hoàn toàn không hề có ý định sẽ dành chút tình cảm nào cho cậu…<br>Trong trẻo, ấm áp và tươi sáng, Công tử mồ côi là câu chuyện cảm động về tình cảm gia đình, về tình bạn, tình thân và về sức mạnh phi thường của tình yêu thương và sự tử tế.'
        },

        {
            id: 32,
            status: 1, 
            title: 'One Piece - Tập 106 - “Giấc Mơ Của Thiên Tài”',
            category: 'Truyện tranh',
            img: './images/products/ttranh1.webp',
            price: 28000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Băng Hải tặc Mũ Rơm đã đặt chân lên đảo Egghead. Ở đó có khu nghiên cứu của Dr. Vegapunk cùng vô số kĩ thuật chưa ai biết tới khiến máu thám hiểm trong người Luffy rần rần kích động!! Trong lúc đó, CP0 cũng tấn công lên đảo với mục đích ám sát Vegapunk!?<br>Những chuyến phiêu lưu trên đại dương xoay quanh “ONE PIECE” lại bắt đầu!!'
        },

        {
            id: 33,
            status: 1, 
            title: 'Bảng xếp hạng quân vương',
            category: 'Truyện tranh',
            img: './images/products/ttranh2.webp',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Ở vương quốc nọ có một hoàng tử tên là Bojji, cậu bị khiếm thính và yếu ớt đến mức không nhấc nổi thanh kiếm của một đứa con nít. Gần như tất cả mọi người, từ thần dân trong vương quốc cho đến đám quân lính hay người hầu trong lâu đài đều coi thường Bojji và gọi cậu là hoàng tử vô dụng. Thế rồi Bojji có người bạn đầu tiên trong đời là Kage – một cái bóng.<br>Đây là "câu chuyện cổ tích" của lòng tốt và sự kiên cường. Vượt qua định kiến, viết lại số phận, hành trình của hoàng tử bé nhỏ Bojji và người bạn đồng hành Kage xin phép được bắt đầu!!'
        },

        {
            id: 34,
            status: 1, 
            title: 'Conan - Thám tử lừng danh tập 105',
            category: 'Truyện tranh',
            img: './images/products/ttranh3.webp',
            price: 23500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Ooka Momiji bị đe doạ đến tính mạng trên tàu shinkansen. Liệu quản gia Iori Muga và mọi người có thể giải cứu cô an toàn!?<br>Ran dẫn Heiji và các bạn tới một thắng cảnh tuyệt đẹp… Nhưng khi ở trên núi, họ tình cờ gặp một vụ án mạng kì bí! Kaito Kid và Conan sẽ bắt tay hợp tác!? Đối thủ của họ là… Hakuba Saguru!!'
        },

        {
            id: 35,
            status: 1, 
            title: 'Conan - Thám tử lừng danh tập 103',
            category: 'Truyện tranh',
            img: './images/products/ttranh4.webp',
            price: 23500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Khách sạn nơi Sera và Mary đang ở bỗng nhận được thư cảnh báo đánh bom! Giữa lúc nhiều suy nghĩ đan xen, Conan đã cùng luật sư Kisaki truy tìm hung thủ!! Nhóm thám tử nhí ra biển chơi. Người đưa chúng đi là Subaru Okiya và… Rumi Wakasa! Không khí giữa họ có gì đấy rất căng thẳng… Và còn Kaito Kid cải trang thành Azusa Enomoto!! Conan cùng Toru Amuro tình cờ có mặt tại hiện trường khi đó…!?'
        },

        {
            id: 36,
            status: 1, 
            title: 'Thám tử Xeno và 7 căn phòng kín',
            category: 'Truyện tranh',
            img: './images/products/ttranh5.webp',
            price: 28500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Để lấy lại kí ức của mình, thám tử Xeno phải đối đầu với “7 căn phòng kín” – những tác phẩm của kiến trúc sư hắc ám Kai Shichiro cho phép bất cứ kẻ nào cũng có thể thực hiện tội ác hoàn hảo! Vụ án “chết đuối” bất khả thi đã xảy ra trên chuyến tàu giường nằm cao cấp do Kai Shichiro thiết kế!! Hiện trường chính là căn phòng kín số 3… Thủ thuật phía sau là!?<br><i>“Ngày tôi lấy mạng cô ta”</i><br>Một nhà thiết kế trong phút bốc đồng đã sát hại kẻ đeo bám mình. Ngay khi vừa cố gắng che đậy hành vi phạm tội, cô ta phải đối mặt với Xeno!<br><i>“Điểm mù của thợ săn”</i><br>Xeno vô tình vướng vào vụ án xả súng trong công viên. Người bị nhắm đến chính là anh!? Quá khứ gây sốc dần sáng tỏ…'
        },

        {
            id: 37,
            status: 1, 
            title: 'One Punch Man tập 29',
            category: 'Truyện tranh',
            img: './images/products/ttranh6.jpg',
            price: 23500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Blast, anh hùng số 1 Cấp S bỗng xuất hiện trước mặt Saitama và Hào Quang Chớp Nhoáng! Mục đích của anh ta là gì khi đuổi theo một chiếc hộp bí ẩn!? Trong lúc đó, các anh hùng Cấp S lại rơi vào tình thế hiểm nghèo trước cuộc tổng tấn công cực mạnh của bè lũ quái nhân cấp cao. Genos đã chiến đấu rất dũng cảm, mặc cho máy móc trong cơ thể anh liên tục ra tín hiệu cảnh báo nguy hiểm và có thể sẽ phát nổ…!?'
        },
        {
            id: 38,
            status: 1, 
            title: 'Doraemon - Nobita và hòn đảo diệu kì - cuộc phiêu lưu của loài thú',
            category: 'Truyện tranh',
            img: './images/products/ttranh7.webp',
            price: 33000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Nhóm Nobita đến thăm hòn đảo bí ẩn, nơi bảo vệ các loài động vật bị tuyệt chủng. Hòn đảo đó được bảo vệ bởi sức mạnh của con bọ hung sừng chữ Y hoàng kim có tên gọi “Golden Hercules”. Trên hòn đảo, nhóm bạn gặp Dakke, một cậu bé bí ẩn trông giống hệt Nobita. Nhưng một thương nhân xấu xa tên Sharman muốn cướp con bọ hung hoàng kim xuất hiện, gây ra cuộc đại chiến. Các cậu, chúng ta hãy dốc hết sức bảo vệ hòn đảo của ước mơ và hi vọng!'
        },
        {
            id: 39,
            status: 1, 
            title: 'Doraemon - Nobita và cuộc đại thủy chiến ở xứ sở người cá',
            category: 'Truyện tranh',
            img: './images/products/ttranh8.webp',
            price: 33000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Doraemon đã dùng bảo bối “máy bơm mô phỏng mặt nước giả tưởng” để biến cả thành phố nơi Nobita đang sống chìm xuống đáy biển. Sau khi phải rời khỏi hành tinh Aqua, cư dân tộc người cá đã đáp xuống Trái Đất và âm thầm sống dưới đáy biển. Một ngày, công chúa Sophia đã vô tình bơi lạc vào vùng biển giả tưởng của Nobita…<br>Phát hiện ra nơi ẩn náu của tộc người cá, Buikin và bè lũ quái vật người cá xuất hiện tấn công họ. Và cuộc đại thủy chiến liên quan đến thanh gươm truyền thuyết của tộc người cá bùng nổ!!!'
        },

        {
            id: 40,
            status: 1, 
            title: 'Dragon Ball - phần ba: cuộc đổ bộ của nười Saiya',
            category: 'Truyện tranh',
            img: './images/products/ttranh9.webp',
            price: 73150,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sau Đại hội võ thuật lần thứ 23, Đại Ma Vương Piccolo không còn quấy rối dân lành nữa. Goku và các bạn quay trở về cuộc sống bình thường. Anh đã kết hôn với Chichi, con gái của Ngưu Ma Vương và có một cậu con trai tên là Gohan. Trong một lần Goku đưa Gohan đến đảo Rùa chơi thì bỗng có một kẻ ăn vận kì lạ, tự xưng là anh trai ruột của Son Goku xuất hiện. Hắn đã tiết lộ một điều khủng khiếp về thân thế thật của Goku rồi bắt cóc Gohan đem đi mất...<br>Xin mời các bạn tiếp tục theo dõi phần truyện màu đầy kịch tính tiếp theo của 7 Viên Ngọc Rồng: Dragon Ball Full Color: Cuộc đổ bộ của người Saiya.'
        },

        {
            id: 41,
            status: 1, 
            title: 'Naruto quyển 34',
            category: 'Truyện tranh',
            img: './images/products/ttranh10.jpg',
            price: 30000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Thẳng tiến đến hang ổ của Orochimaru! Sau khi thâm nhập, đội Naruto đã gặp lại Sai. Nhờ tấm lòng luôn muốn gắn kết với Sasuke, Naruto đã giúp Sai tìm lại được cảm xúc của bản thân. 2 năm rưỡi vụt qua, cuối cùng thời khắc tái ngộ giữa 2 người bạn cũng tới…!!'
        },
        {
            id: 42,
            status: 1, 
            title: 'Được học',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c1.webp',
            price: 149000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Bạn đọc sẽ biết ngay từ đầu rằng Tara Westover đang kể một câu chuyện có thực, hơn hết lại là câu chuyện cuộc đời cô, nhưng dù ít hay nhiều chúng ta vẫn cảm thấy sao mà nó “như tiểu thuyết”!<br>Cô bé Tara sống trên núi, đã vậy còn chưa bao giờ được đi học bởi vì bố của Tara – một người quyết liệt bài bác trường công cũng như bất cứ khía cạnh văn minh nào “phản tự nhiên”, phản lại ý Chúa – muốn như thế. Thậm chí cô bé này không có cả giấy khai sinh, nghĩa là trong hệ thống xã hội cô không tồn tại. Tara tồn tại theo “luật” của bố: cô được định nghĩa qua những công việc nhằm sửa soạn cho ngày Tận thế, những lao động khổ ải ở bãi phế liệu, và trên hết là nề nếp khắc kỷ tuyệt đối thể hiện lòng sùng kính Chúa.<br>Cô gái ấy lớn lên hầu như chỉ trong cảm giác vi phạm và tội lỗi – đi học là tội lỗi, rung động với bạn khác giới là tội lỗi, mặc váy và áo thun ôm sát là tay sai của quỷ Sa-tăng. Bố Tara đã nuôi dạy cô (cũng như các anh chị em khác) ở một “thành trì” kiên cố đến mức cô hầu như không thể quen với những lời khen, với tình cảm ân cần, ưu ái. Tara Westover không hề hư cấu chuỗi kịch tính trong đời mình (đọc tự truyện, chúng ta sẽ thấy tác giả luôn lo ngại việc kể sai, kể sót): từ chuỗi vận nạn của chính cô đến những tai nạn lần lượt xảy ra với các thành viên gia đình, mà hầu như tất cả đều bắt nguồn nơi tính cách, lối sống kì dị của ông bố. Song càng lật mở những trang sách thì tim chúng ta càng thắt lại với câu hỏi: Sao kia, chuyện này là có thật?<br>Tara Westover đã vượt qua cái có thật ấy, dĩ nhiên chẳng hề theo cách thẳng băng, dễ dàng, để được đi học; và mãi về sau, khi trở thành Tiến sỹ tại Đại học Cambridge lừng danh, cô đã buộc phải chấp nhận tình cảnh đứt lìa mối quan hệ với hầu hết người ruột thịt.<br>Được học, được giáo dục là niềm vui, niềm hạnh phúc, với một số người đó còn là cứu rỗi. Như Tara. Dẫu giá phải trả cực kỳ đắt đỏ, dai dẳng, thấu xương. Nhưng cô đã chọn để được tự do, để trở nên tốt đẹp hơn, dù bao đơn độc.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Sức mạnh của tư duy phản biện',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c5.webp',
            price: 93000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Phản biện không phải là chuyện tôi đúng - anh sai, mà đôi bên cùng thắng mới là cao tay nhất.<br>Phản biện không chỉ là chuyện tranh luận với người khác, mà còn là hoài nghi và tự vấn với những niềm tin cố hữu của chính mình.<br>Nếu bạn luôn tin những gì mình tin, bạn sẽ trở nên cố chấp và định kiến. Nếu bạn luôn tuân theo khuôn mẫu, bạn sẽ sớm thất bại trong cuộc chơi. Nếu bạn luôn đồng tình với những gì số đông cho là đúng, bạn sẽ mãi tưởng vòm trời là hình tròn.<br>Bằng việc rèn luyện tư duy phản biện, bạn có thể thoát khỏi tư duy lối mòn, thay đổi góc nhìn và lập ra cuộc chơi của riêng bạn.<br>Trong cuốn sách <b>Sức mạnh của tư duy phản biện</b>, tác giả Lý Thế Cường sẽ cho bạn thấy, việc rèn luyện tư duy phản biện thực chất không hề khó, nó tồn tại trong vô vàn tương tác từ nhỏ đến lớn của cuộc sống. Nếu được vận dụng có chủ đích, đây sẽ là công cụ đắc lực giúp bạn tạo ra đột phá trong thế giới quan của bản thân, giải quyết các vấn đề khó khăn và đưa ra các quyết định thông minh hơn.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Làm chủ tư duy',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c6.webp',
            price: 85680,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>“Bão thông tin” - Đây chính xác là cụm từ mô tả thời đại mà chúng ta đang sống.<br>Càng ngày càng có nhiều nền tảng mạng xã hội mới xuất hiệnvà nó đồng nghĩa với việc con người có rất nhiều cơ hội để chia sẻ những thứ được gọi là “quan điểm cá nhân”. Không ít người trong số đó dùng nó làm vỏ bọc để che đậy những phát ngôn mang tính định hướng dư luận, bóp méo sự thật hay lan truyền thông tin rác. Và rồi, trong một xã hội thật giả lẫn lộn như vậy, đôi khi ta vội tin vào bất cứ điều gì mình nhìn thấy, vội tin vào những điều sai sự thật.<br>Câu hỏi đặt ra là: <b>Vậy làm thế nào để chúng ta có thể tư duy đúng hướng?</b><br>Câu trả lời có thể tóm gọn trong ba ý sau:<br><b>- Luôn đặt câu hỏi về quan điểm của người khác.</b><br><b>- Luôn xác nhận tính đích thực của thông tin mà bản thân tiếp nhận.</b><br><b>- Và quan trọng là luôn để bản thân tiếp nhận những quan điểm trái chiều và khác với lập trường của mình. Hay nói cách khác là luôn cởi mở về tâm trí.</b><br>Liệu có tồn tại một phương pháp cụ thể hay hướng dẫn nào cho người mới bắt đầu và mong muốn có được tư duy rành mạch, sáng suốt không?<br>Tất cả đã được tác giả Patrick King đúc kết trong Làm chủ tư duy. Có thể nói, cuốn sách này giống như một cái kính lúp, giúp chúng ta nhìn tỏ những vấn đề trong việc tư duy và tiếp nhận thông tin tồn tại bên cạnh ta hằng ngày nhưng ta lại luôn không để ý đến hay thậm chí là phớt lờ và cố tình không nhận thức về chúng, để rồi bị lu mờ trước biển thông tin dày đặc, thật giả lẫn lộn không có điểm dừng. Với sự hướng dẫn chi tiết của tác giả, tin rằng mỗi bạn đọc đều có thể từng bước vượt qua “cơn bão” và làm chủ được tư duy của chính mình.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Phá vỡ khuôn mẫu',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c7.webp',
            price: 158000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Vượt qua những tổn thương thời thơ ấu</b><br>Có thể bạn không nhận ra, phần lớn chúng ta khi đang ở trong một mối quan hệ tình cảm, tình bạn, hay nuôi dạy con cái thường vô thức lặp lại những khuôn mẫu đã được hình thành từ thuở bé. Thật khó mà tin được, nhưng những tổn thương từ việc bị bỏ bê, lạm dụng hay những nỗi đau được truyền lại từ cha mẹ… đều có thể tác động đến cách bạn nhìn nhận mọi thứ trong đời sống hiện tại.<br>Trong cuốn sách “Phá vỡ khuôn mẫu” (tựa gốc: The Origins of You), tác giả Vienna Pharaon, nhà trị liệu hôn nhân và gia đình sẽ từng bước dẫn dắt bạn tìm hiểu về vết thương cội nguồn của mình. Tác giả cũng sẽ giúp bạn đi tìm nguyên nhân vì sao những câu chuyện, những mối quan hệ trong gia đình vẫn tiếp tục ảnh hưởng đến cuộc sống hiện tại và tương lai của bạn, của con cái bạn; và cách áp dụng phương pháp Chữa lành tận gốc để bạn thoát ra khỏi khuôn mẫu này..<br>Một cô gái lúc nhỏ từng giúp cha che giấu vụ ngoại tình nên luôn nghi ngờ những mối quan hệ tình cảm của mình trong hiện tại. Một người phụ nữ bị mẹ bỏ rơi lúc năm tuổi đã tin rằng mình không xứng đáng, nên khi trưởng thành cô liên tục thử thách người yêu để có cảm giác mình là người quan trọng. Hay một chàng trai lớn lên trong hoàn cảnh không được ai tin tưởng và ủng hộ nên luôn mong muốn được bạn đời bảo vệ vô điều kiện, dẫn đến những trận cãi vã không dứt… Những câu chuyện trong “Phá vỡ khuôn mẫu” tuy đã ẩn danh tính nhân vật, nhưng vẫn vô cùng chân thật và là những câu chuyện thường thấy trong cuộc sống, bất cứ ai trong chúng ta cũng có thể gặp phải nhưng chưa biết cách giải quyết.<br>Qua từng chương sách, Vienna Pharaon sẽ dẫn dắt chúng ta khámkhám phá từng loại trong số các vết thương do câu chuyện cội nguồn gây ra. Đồng thời, cô cũng hướng dẫn bạn chữa lành vết thương của mình với phương pháp Chữa lành tận gốc gồm bốn bước: xác định vết thương, bằng chứng về nó, nỗi tiếc thương đi kèm với nó, và cuối cùng là thực hiện những thay đổi lâu dài để không lặp lại những khuôn mẫu mà bạn vẫn cố phá vỡ trong các mối quan hệ ở tuổi trưởng thành.<br>',
        },
        {
            id: 46,
            status: 1, 
            title: 'Dám ước mơ',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c8.webp',
            price: 70000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><i>“Để sáng tạo tương lai, cần bắt đầu bằng một ước mơ.”</i> - Victor Hugo.<br>Rất nhiều người ngỡ rằng ước mơ là những gì xa xôi, ngoài tầm tay với; là những viễn cảnh xa rời thực tại; là kết quả của sự thăng hoa từ cảm xúc và trí tưởng tượng của những người có tâm hồn lãng mạn. Thậm chí, có người còn cho rằng ước mơ chỉ là suy nghĩ viển vông của những ai không có động lực phấn đấu, của những người ngồi đung đưa trên chiếc xích đu ở vườn nhà mà cứ ngỡ mình đang rong chơi cùng các vì sao, của những kẻ xem bói với hy vọng được nghe những điều phán tốt lành cho tương lai, của những người sống trong mộng ảo khi luôn phân tích và tin vào số phận của mình qua những giấc mơ, hoặc của những người mua vé số và mòn mỏi đợi đến ngày con số may mắn kia được xướng lên trong bản tin chiều…<br>Có vẻ như ước mơ không phải là bạn đồng hành thân thiết của chúng ta, mà lại sánh đôi cùng sự Mơ Tưởng hoặc sự May Mắn. Liệu ước mơ có chút liên quan nào đến những con người trong thế giới thực tại - những người không lãng mạn cùng các vì sao, mây trời; không sống trong tháp ngà của những câu chuyện cổ tích; mà là người luôn phải bôn ba với cuộc sống, nỗ lực tìm kiếm những điều rất thực tế như sự vững chắc trong sự nghiệp, sự thành công trong kinh doanh, niềm hạnh phúc với mái ấm gia đình?<br>Thật ra, ước mơ trong đời thực chính là những mục tiêu mà bạn khao khát đạt được trong cuộc sống của mình. Tuy nhiên, vẫn có một chút khác biệt giữa mục tiêu và ước mơ. Mục tiêu thường cụ thể và rõ ràng. Mục tiêu có thể theo dõi và đánh giá. Mục tiêu có thể kiểm tra và thẩm định quá trình tiến triển. Còn ước mơ sẽ làm tăng thêm cảm xúc sáng tạo cho mục tiêu, mở rộng tầm nhìn cho những định hướng và làm chúng ta thêm hy vọng ở tương lai. Ước mơ sẽ làm cho thực tế cuộc sống thêm phần tốt đẹp và sinh động hơn.<br>Đó cũng là nội dung của cuốn sách <b>Dám Ước Mơ</b> của nữ tác giả Florence Littauer. Cuốn sách được dẫn dắt xuyên suốt bằng câu chuyện về cuộc đời và sự thành công của một phát thanh viên - em trai tác giả.<br>Hy vọng với cuốn sách này, những ai chưa từng ước mơ sẽ nhanh chóng tìm thấy ước mơ của riêng mình; những ai đang nuôi dưỡng ước mơ sẽ củng cố thêm quyết tâm để biến ước mơ trở thành hiện thực; và những ai đã hoàn thành, đã chinh phục được ước mơ của mình sẽ tiếp tục cuộc hành trình tìm kiếm một ước mơ mới.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Sáng tạo - bừng cháy sức mạnh bên trong',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c9.jpg',
            price: 97000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Bạn đọc Việt Nam đã yêu thích với quyển sách Hạnh Phúc Tại Tâm (JOY: The Happiness That Comes from Within) của tác gia Osho do First News xuất bảnvà đánh giá rất cao. Không chỉ vậy, quyển sách còn trở thành người bạn đồng hành trong cuộc sống. Và giờ đây, bạn đọc chắc chắn sẽ tìm được nhiều cảm hứng với quyển sách Sáng Tạo – Bừng Cháy Sức Mạnh Bên Trong (Creaty Unleashing The Fores Within).<br>Trong đời sống hiện đại, ai cũng cần có khả năng đáp ứng một cách sáng tạo trước những thử thách mới. Những ai chỉ biết đối diện với cuộc đời bằng những gì đã học trong quá khứ thì sẽ bị thiệt thòi ghê gớm trong các mối quan hệ lẫn trong sự nghiệp của mình. Để chuyển từ thái độ sống bắt chước và bị gò bó bởi các nguyên tắc sang lối sống sáng tạo và linh hoạt, chúng ta cần phải thay đổi sâu sắc thái độ của chúng ta về bản thân và về khả năng của chính mình.<br>Sáng tạo là sự nổi loạn ngoạn mục nhất trong cuộc sống. Để sáng tạo, bạn phải thoát khỏi mọi khuôn phép; bằng không, sự sáng tạo của bạn chỉ là một bản sao chép không hơn không kém. Bạn cũng chỉ có thể sáng tạo khi bạn tồn tại như một cá thể riêng biệt, độc đáo và tách rời khỏi tâm lý đám đông.<br>Người sáng tạo không thể bước theo lối mòn cũ kỹ. Anh ta phải vạch ra hướng đi riêng cho mình, phải tự khám phá những bí ẩn của cuộc đời. Anh ta phải dấn thân, phải vượt ra khỏi tâm trí của đám đông. Tâm lý đám đông cũng có sức cám dỗ của riêng nó: những ai một mực cho rằng lựa chọn của đám đông là hướng đúng đắn duy nhất thì sẽ được tôn trọng, kính nể.<br>Sáng Tạo – Bừng Cháy Sức Mạnh Bên Trong sẽ dẫn dắt bạn đi vào thế giới của sự sáng tạo từ những bước chuẩn bị ban đầu, đến những trở ngại, khó khăn, những thắc mắc và cuối cùng không gì khác hơn là sự sáng tạo. Ở đó, bạn nhận thấy ý nghĩa cuộc sống là một vũ điệu chứ không phải một tảng đá trước mặt. Nó cũng chính là âm nhạc. Và bạn là người tạo ra nó chứ không phải là tìm thấy nó.<br>Nhà triết học hiện đại Osho, thiền sư Osho, đạo sư Osho, luận sư Osho, nhà sáng tạo Osho, hay đơn giản là… Osho, đã không ngừng nói cho người nghe cùng thời và người đọc của mọi thời về bản chất của cuộc sống. Suốt 35 năm, tư tưởng của ông bay khắp mọi nơi trên thế giới bằng con đường truyền bá của những môn đệ thầm lặng, bất chấp những đánh giá khắt khe và đầy “hoang mang” về tinh thần triết học mãnh liệt của ông. Tác phẩm Sáng Tạo – Bừng Cháy Sức Mạnh Bên Trong cũng là một trong số những tâm tình thánh thiện đó.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Khai mở tâm trí',
            category: "Kỹ năng sống",
            img: './images/products/kỹ năng sông/c10.webp',
            price: 105000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Bạn có muốn rèn luyện tư duy sáng tạo, logic để nhanh nhạy giải quyết tất thảy vấn đề trong cuộc sống?<br>Bạn có thấy mình cần thoát khỏi tình trạng trì hoãn, ngại khó để kiên trì hành động trong thời gian dài?<br>Đã có khi nào bạn muốn hóa giải những cảm xúc tiêu cực để hành động theo chủ đích chưa?</b><br>Hẳn ai trong chúng ta cũng đều có những trăn trở như trên, tuy nhiên rất ít người hiểu được quan trọng nhất không phải là làm gì, mà là làm thế nào để điều chỉnh và định hình lại tâm trí.<br>Dựa trên tâm lý học xã hội, khoa học nhận thức và khoa học thần kinh của nhiều thập kỉ, cuốn sách này sẽ giúp bạn nắm rõ các nguyên lý và cơ chế cấu thành tâm trí, hướng dẫn bạn thiết lập một mô hình tư duy có hiệu quả để từ đó có cho mình lộ trình phát triển bản thân cụ thể hơn.<br>Bằng lối viết chặt chẽ và logic, tác giả Lachel đã đưa ra một hệ thống những phương pháp mang tính thực tiễn cực kỳ dễ hiểu, giải quyết đồng thời nhiều vấn đề khúc mắc ở các khía cạnh chính trong cuộc sống của chúng ta. Nếu bạn thấy mình đang cần một “cú hích” để mạnh dạn bước ra khỏi vùng an toàn thì hãy bắt đầu với “Khai mở tâm trí”, bởi nó sẽ cho bạn thấy khả năng của mình là không giới hạn.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Hoàng tử bé',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn1.webp',
            price: 61500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>“...Cậu hoàng tử chợp mắt ngủ, tôi bế em lên vòng tay tôi và lại lên đường. Lòng tôi xúc động. Tôi có cảm giác như trên Mặt Đất này không có gì mong manh hơn. Nhờ ánh sáng trăng, tôi nhìn thấy vầng trán nhợt nhạt ấy, đôi mắt nhắm nghiền các lẵng tóc run rẩy trước gió, và tôi nghĩ thầm: "Cái mà ta nhìn thấy đây chỉ là cái vỏ. Cái quan trọng nhất thì không nhìn thấy được..." ANTOINE DE SAINT-EXUPÉRY<br>“Hoàng tử bé ngắn mà mãnh liệt... biểu hiện nỗi đau của nhà văn và tư tưởng triết học của ông về ý nghĩa của sự có mặt ở trên đời, nỗi khát khao không thể nào vơi được về lòng nhân ái, về sự cảm thông giữa những con người...” - Dịch giả NGUYỄN THÀNH LONG<br>ANTOINE DE SAINT-EXUPÉRY (1900 - 1944): Nhà văn, phi công Pháp nổi tiếng. Sinh tại Lyon, Pháp. Chiến tranh Thế giới thứ nhất ông theo mẹ sang Thụy Sĩ. Năm 1917, trở về Pháp, học trung học tại Paris, sau đó vào trường Mĩ thuật. Năm 1921, ông gia nhập không quân Pháp. Ngày 31.7.1944, ông lái máy bay với nhiệm vụ trinh sát và đã mất tích trên bầu trời Địa Trung Hải… Saint-Exupéry đã được vinh danh với nhiều giải thưởng văn học cao quý. Ông để lại những tác phẩm đặc sắc: Người phi công (LAviateur, 1926); Chuyến thư miền Nam (Courrier Sud, 1929); Bay đêm (Vol de Nuit , 1931); Quê xứ con người (Cõi người ta, Terre des Hommes, 1939); Phi công thời chiến (Pilote de Guerre, 1942); Thư gửi một con tin (Lettre à un Otage, 1943)…<br>NGUYỄN THÀNH LONG (1925-1991) còn có các bút danh khác là Lưu Quỳnh, Phan Minh Thảo. Sinh tại huyện Duy Xuyên, tỉnh Quảng Nam, nguyên quán ở Quy Nhơn, Bình Định. Nguyễn Thành Long là nhà văn, cây bút chuyên viết về truyện ngắn và kí, đã cho xuất bản nhiều tác phẩm văn xuôi (khoảng 14 đầu sách). Truyện ngắn Lặng lẽ Sa Pa của ông được giới thiệu trong chương trình Ngữ Văn và được giảng dạy trong nhà trường. Ngoài Hoàng tử bé, ông còn là dịch giả của “Quê xứ con người” cũng của tác giả Saint-Exupéry.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Gieo Mầm Tính Cách - Tự Tin (Tái Bản 2019)',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn2.webp',
            price: 27200,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Tính cách của trẻ được hình thành từ rất sớm, thông qua sự giáo dục trong gia đình, qua những việc làm, lời nói, cách ứng xử của những người xung quanh. Nhưng ở độ tuổi nhỏ, không thể ép trẻ phát triển tính cách theo ý muốn của cha mẹ bằng lời dạy dỗ suông, bằng những bài học đạo đức khô khan, mà những tấm gương đẹp về tính cách đó phải được gieo vào trẻ từ từ bằng những câu chuyện sinh động, hấp dẫn.<br>Bộ sách Gieo mầm tính cách (12 tập) là tập hợp những câu chuyện như vậy. Mỗi tập là một hạt giống tính cách gieo vào trẻ những bài học Tử tế, Tha thứ, Kiên trì, Thật thà, Quan tâm, Yêu thương, Mạnh mẽ, Tự tin, Ước mơ, Lịch sự, Hiếu thảo, Công bằng bằng những câu chuyện cảm động, đầy ý nghĩa đáng để suy ngẫm.<br>Mỗi câu chuyện được trình bày kèm với một câu tục ngữ, thành ngữ, ca dao, danh ngôn nhằm nhấn mạnh thêm thông điệp mà người tuyển chọn muốn gửi gắm. Không chỉ vậy, những bài học sau mỗi câu chuyện được xây dựng gần gũi, nhiều gợi mở cho người đọc triển khai thêm nhiều suy nghĩ sau khi đọc truyện, so sánh, áp dụng thực tế và tự xét bản thân.<br>Truyện được minh họa hai màu sinh động.',
        },
        {
            id: 51,
            status: 1, 
            title: 'Tuyển tập truyện cổ tích Việt Nam',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn3.webp',
            price: 45000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Tuyển Tập Truyện Cổ Tích Việt Nam Dành Cho Thiếu Nhi</b><br>Trong kho tàng văn học dân gian Việt Nam, truyện cổ tích có vai trò vô cùng quan trọng, phản ánh nhiều mặt về tư tưởng, thái độ, tình cảm của nhân dân ta trong suốt chiều dài lịch sử. Trải qua nhiều thế hệ truyền miệng trong dân gian, truyện cổ tích trở nên gần gũi và quen thuộc với tuỏi thơ của mỗi chúng ta. Những câu chuyện mà ông bà, cha mẹ kể trong những năm tháng tuổi thơ sẽ giúp chúng ta lớn lên biết cảm nhận cái đẹp, cái thiện trong cuộc sống.<br>Bước vào thế giới của những câu chuyện cổ tích, các bạn nhỏ không chỉ thỏa mãn được nhu cầu khám phá, tìm hiểu về đời sống cha ông từ thuở xưa mà còn rút ra nhiều bài học ý nghĩa về cuộc sống, tình yêu thương và lòng nhân ái.<br>Trong cuốn sách này có:<br>- Gần 100 truyện cổ tích thú vị của Việt Nam<br>- Câu chuyện được tóm tắt ngắn gộn chỉ trong 2 trang, dễ đọc mà vẫn đảm bảo đầy đủ nội dung<br>- Bài học bổ ích đi kèm mỗi câu chuyện<br>- Minh họa sinh động',
        },
        {
            id: 52,
            status: 1, 
            title: 'Giúp trẻ làm chủ cảm xúc - nhận biết và thấu hiểu cảm xúc',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn4.webp',
            price: 24000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Đối với nhiều bậc phụ huynh, hướng dẫn trẻ từ 3-9 tuổi biểu lộ cảm xúc một cách lành mạnh, đúng mực, không cư xử ích kỷ, hờn dỗi, quậy phá là một thử thách thật sự. Liệu có cách nào hiệu quả để giúp các em hiểu rõ những cảm xúc hết sức tự nhiên đang xuất hiện trong lòng, từng bước điều hòa và bày tỏ chúng theo cách có lợi nhất cho sức khỏe tinh thần của mình?<br>Để trả lời câu hỏi đó, Tomenie Books xin giới thiệu với bạn đọc bộ sách EQ-IQ giúp trẻ làm chủ cảm xúc được tác giả người Pháp Audrey Bouquet viết theo phương pháp tâm thể (sophrology) rất phổ biến ở châu Âu. Bộ sách gồm 8 cuốn với minh họa dễ thương sẽ kể cho các em nghe câu chuyện của bạn Mèo con ngộ nghĩnh, lồng ghép vào đó những bài học, lời khuyên và giải pháp để các em biết cách đối diện với nỗi sợ, nỗi lo lắng, cơn giận, niềm vui cũng như nhiều cảm xúc khác nữa.<br><b>Về hai tác giả của bộ sách</b><br>- <b>Tác giả Audrey Bouquet</b> vốn là một nhà khoa học. Bà học chuyên ngành sinh học và dinh dưỡng học, sau đó được đào tạo về phương pháp tâm thể. Cơ duyên thú vị khiến bà đến với sách thiếu nhi bắt nguồn từ chính những đứa con của bà. Từ đây, bà bắt đầu kết hợp kiến thức khoa học vào những câu chuyện thú vị và ngộ nghĩnh, giúp trẻ ứng xử phù hợp với cảm xúc của mình và với thế giới xung quanh. Qua từng trang sách, ta có thể thấy sự yêu thương, tận tâm và mong ước đồng hành cùng các bạn nhỏ trên con đường trưởng thành của Audrey Bouquet.<br>- <b>Fabien Öckto Lambert</b> là họa sĩ minh họa, từng học truyền thông thị giác tại trường Brassart de Tours. Ông có nhiều tác phẩm tham dự những cuộc triển lãm và có khoảng 10 năm kinh nghiệm trong lĩnh vực đồ họa và mỹ thuật. Hiện ông đang hợp tác với nhiều tác giả để vẽ minh họa cho những dự án sách thiếu nhi. Ông chia sẻ: “Tranh vẽ của tôi được dành cho thiếu nhi nhưng tôi hy vọng nó cũng thắp nên niềm vui trong trái tim người lớn”. Thật vậy, trong bộ sách EQ-IQ giúp trẻ làm chủ cảm xúc, những minh họa của Lambert rất ấn tượng, tập trung vào biểu cảm chân thực của những chú mèo, đem tới muôn vàn hứng thú cho độc giả nhí.',
        },
        {
            id: 53,
            status: 1, 
            title: 'Hungry Babies - Những em bé đói ngấu',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn6.webp',
            price: 38500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Bộ đôi sách của tác giả Fearne Cotton là món quà cực kì xinh xắn giúp các độc giả nhí:<br>- Phát triển thể chất<br>- Bồi đắp tinh thần<br>- Phát triển ngôn ngữ (tiếng Việt và tiếng Anh)<br>- Hình thành nết ăn nết uống<br><i>Trẻ em như búp trên cành<br>Biết ăn ngủ, biết học hành là Ngoan</i><br>Dù ở Á hay Âu, đó cũng là mong ước của tất cả các bậc phụ huynh dành cho con trẻ. 2 cuốn sách của Fearne Cotton do Sheena Dempsey minh họa đã đáp ứng niềm mong ước ấy theo một cách cực kì sinh động.<br>Cuốn sách thứ nhất, <i>Hungry Babies – Những bé em đói ngấu</i> đưa ra rất nhiều tình huống vui nhộn hằng ngày liên quan đến nết ăn uống của các em: có em không chịu ngồi vào bàn, có em lại chỉ thích ăn chuối, có em thì phải vừa chơi vừa đánh chén v.v. Qua các tình huống thực tế như vậy, người lớn có thể từng bước hướng dẫn trẻ cách ăn uống lành mạnh và lịch sự: “Con thấy đấy, nếu mình không ngồi vào bàn ăn thì đồ ăn sẽ tung tóe khắp nhà”; “Mình mà ợ như em Jack thì có làm phiền người khác không?”; “Ăn chuối tốt cho sức khỏe, con nhìn bạn Kit xem”... Trẻ em luôn học hỏi rất nhanh, và điều chỉnh tích cực hành vi nhờ những câu chuyện cũng như hình ảnh gần gũi, hóm hỉnh.',
        },
        {
            id: 54,
            status: 1, 
            title: 'Phát Triển Tư Duy - Kĩ Năng Cho Bé: Nuôi Dưỡng Tình Bạn - Voi Và Ỉn Là Đôi Bạn Thân',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn7.webp',
            price: 24500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Giúp trẻ rèn luyện kĩ năng tư duy, kĩ năng phối hợp, làm việc nhóm.<br>Giúp trẻ bồi dưỡng tình bạn, tình cảm gia đình.<br>Nâng cao lòng tự tin, tinh thần tự lập ở trẻ.<br>Bộ sách Truyện tranh phát triển tư duy – kĩ năng cho bé yêu giới thiệu với bạn đọc những tình huống gần gũi trong cuộc sống thường ngày. Với những hình ảnh đẹp, màu sắc rực rỡ đầy hấp dẫn, trẻ không chỉ học được học kĩ năng ứng xử qua từng tình huống mà còn học cách nhận biết màu sắc, tư duy hình khối (Cá sấu và các bạn hình khối). Những bạn thú dễ thương như Nhím, Thỏ, Lợn, Chuột Chũi... với những cách khắc phục khó khăn, trở ngại đầy tinh tế (Nhím con ơi, mình cùng chơi), hợp sức để hướng đến mục tiêu (Dàn nhạc rừng xanh, muôn màu âm thanh)... cho thấy kĩ năng làm việc nhóm và sức mạnh huy động trí tuệ tập thể luôn giúp chúng ta thành công.<br>Bố mẹ cho con đôi mắt giúp con quan sát hình khối và màu sắc, dạy con kĩ năng vận động để con có bước đi vững chắc, nói những lời yêu thương để đôi tai con nhận biết âm thanh... Bên cạnh đó, bé yêu cần được hướng dẫn kĩ năng giao tiếp, ứng xử, kĩ năng hòa nhập – làm việc nhóm, và nuôi dưỡng thái độ sống tử tế...<br>Để hỗ trợ bố mẹ trong quá trình giúp con yêu phát triển toàn diện cả thể chất lẫn tinh thần, Nhà xuất bản Phụ nữ Việt Nam trân trọng giới thiệu tới quý bạn đọc bộ Truyện tranh phát triển tư duy – kĩ năng cho bé yêu.<br>Mong rằng bộ truyện tranh đã được nhận bằng khen của Tổng thống Hàn Quốc trong cuộc thi “Đổi mới công nghệ giáo dục” cũng sẽ giúp các bạn nhỏ Việt Nam hoàn thiện hơn những kĩ năng đầu đời của mình để mỗi ngày với bé yêu là mỗi ngày vui khỏe.',
        },
         {
            id: 55,
            status: 1, 
            title: 'Ương ngạnh - 2',
            category: "Tình cảm",
             img: './images/products/tình cảm/c1.jpg',
            price: 15300,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Năm ấy, Phó Ngôn Chân là hotboy nổi tiếng nhất trường khiến bao cô gái thẹn thùng đỏ mặt khi nhắc đến.<br>Anh có gương mặt say đắm lòng người, tính tình ương bướng ngang ngạnh, chẳng thiếu sự ái mộ của những người xung quanh, nhưng hiếm ai có thể lọt vào cặp mắt lạnh lùng ấy.<br>Hôm đó trời trong nắng ấm nhưng trái tim cô lại lạnh buốt từng cơn. Cô thấy anh dựa vào bức tường xám, nét mặt ngạo mạn nói với mọi người:<br>“Tăng Như Sơ à?”<br>“Sao tao có thể thích con mọt sách ấy được.”<br>Nhiều năm trôi qua. Vào buổi họp lớp, cô dẫn theo một người đàn ông xa lạ, giới thiệu với mọi người: “Đây là bạn trai tớ.”<br>Người đàn ông ngồi đối diện cô đột nhiên vỗ đùi chua chát, dáng vẻ kiêu ngạo sụp đổ trong nháy mắt.<br>Cô nghĩ rằng: Anh là một dấu ấn trong thời thanh xuân rực rỡ của em, nhưng cuối cùng chỉ là vị khách vội vã lướt qua đời em.<br>Anh lại nói: Em là sự hiện diện bất diệt trong lòng tôi.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Gà con Piyo nói lời cảm ơn',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn8.webp',
            price: 75000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Series ehon “Gà con Piyo” đã vượt hơn 10 triệu lượt bán ra trên toàn thế giới. Qua những câu chuyện có nội dung ấm áp về bạn gà con Piyo luôn tò mò và rất đỗi ngây thơ, bộ sách sẽ nuôi dưỡng tình cảm và ngôn từ cho bé ngay từ khi còn nhỏ. Cùng thiết kế sách pop-up với hình minh họa đáng yêu, bé sẽ có được quãng thời gian tương tác, gắn kết với bố mẹ và bạn bè nhờ vào việc đọc sách',
        },
        {
            id: 57,
            status: 1, 
            title: 'Làm Quen Với Xung Quanh - Mình Có Cái Gì Đặc Biệt Nhỉ?',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuốn9.webp',
            price: 30000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Cừu thấy bạn bè xung quanh mình đều có những tính cách, kỹ năng, đặc điểm gì đó đặc biệt nhất, thú vị nhất, thậm chí là “ngầu” nhất. Cừu băn khoăn tự hỏi bản thân mình thì có gì đặc biệt không?<br>Hãy cùng Cừu quan sát, hỏi và trả lời, chắc chắn, em sẽ tìm ra được điểm độc đáo của chính mình, để em luôn tự tin, rằng ai sinh ra đời cũng đều có những điều đặc biệt.<br>Sách nằm trong bộ: “Làm quen với xung quanh”, đây sẽ là những thắc mắc ngộ nghĩnh, tò mò dễ thương, khám phá bất ngờ… giúp các em biết tư duy, vận dụng kỹ năng quan sát, khám phá để biết: Mình có gì đặc biệt? Mình có quan trọng không? Mình sẽ yêu thương ai và ai sẽ yêu thương mình?...trong thế giới rộng lớn này.<br>"Làm quen với xung quanh” giúp bé thấu hiểu bản thân, phát triển cảm xúc tích cực, phát huy óc tò mò… với thế giới xung quanh mình. Sách xứng đáng dành tặng cho mọi trẻ em, để bé phát triển não bộ, trong những năm đầu đời của mình, dù em chưa biết đọc hay em đã giỏi ngôn ngữ. Ba mẹ hãy đọc và cùng con thực hành hỏi - trả lời, chắc chắn ba mẹ sẽ ngạc nhiên với tư duy nhận biết của con mình.<br>Bộ gồm các tựa:<br>- Chúng mình giống nhau thật không?<br>- Mình có cái gì Đặc biệt nhỉ?<br>- Các bạn đang bận làm gì thế?',
        },
        {
            id: 58,
            status: 1, 
            title: 'Bé Điểm Danh Nào! Vâng! ',
            category: "Thiếu nhi",
            img: './images/products/sách thiếu nhi/cuón10.webp',
            price: 59000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Bé điểm danh nào! Vâng!<br>Bé hãy cùng Gấu con Kuma đáp lại "Vâng!" mỗi khi được gọi tên nào.<br>Với nội dung xoay quanh nhân vật chính là bạn Gấu con cùng bạn bè, tuyển tập sách tranh Gấu con muốn giáo dục trẻ trước mầm non hai kỹ năng chính là kỹ năng giao tiếp, ứng xử và kỹ năng sống. Từng quyển sách sẽ dạy cho bé biết chào hỏi, vệ sinh cá nhân, xếp hàng, biết kết bạn và yêu thương mọi người xung quanh. Câu truyện với các thông điệp khác nhau hứa hẹn sẽ tô thêm màu sắc mới cho thế giới của bé, trang bị cho bé những kỹ năng cần thiết trước khi vào mầm non. Chắc chắn bé cũng sẽ rất thích thú trước các nhân vật đáng yêu của tuyển tập này đấy!',
        },
        {
            id: 59,
            status: 1, 
            title: 'Ương ngạnh - 1',
            category: "Tình cảm",
             img: './images/products/tình cảm/c2.webp',
            price: 163000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Năm ấy, Phó Ngôn Chân là hotboy nổi tiếng nhất trường khiến bao cô gái thẹn thùng đỏ mặt khi nhắc đến.<br>Anh có gương mặt say đắm lòng người, tính tình ương bướng ngang ngạnh, chẳng thiếu sự ái mộ của những người xung quanh, nhưng hiếm ai có thể lọt vào cặp mắt lạnh lùng ấy.<br>Hôm đó trời trong nắng ấm nhưng trái tim cô lại lạnh buốt từng cơn. Cô thấy anh dựa vào bức tường xám, nét mặt ngạo mạn nói với mọi người:<br>“Tăng Như Sơ à?”<br>“Sao tao có thể thích con mọt sách ấy được.”<br>Nhiều năm trôi qua. Vào buổi họp lớp, cô dẫn theo một người đàn ông xa lạ, giới thiệu với mọi người: “Đây là bạn trai tớ.”<br>Người đàn ông ngồi đối diện cô đột nhiên vỗ đùi chua chát, dáng vẻ kiêu ngạo sụp đổ trong nháy mắt.<br>Cô nghĩ rằng: Anh là một dấu ấn trong thời thanh xuân rực rỡ của em, nhưng cuối cùng chỉ là vị khách vội vã lướt qua đời em.<br>Anh lại nói: Em là sự hiện diện bất diệt trong lòng tôi.',
        },
        {
            id: 60,
            status: 1, 
            title: 'Anh đến cùng ánh sao trời - 3',
            category: "Tình cảm",
             img: './images/products/tình cảm/c3.jpg',
            price: 153000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>“Anh không biết nói những lời âu yếm, còn hay làm em giận, cũng không có nhiều thời gian ở bên cạnh em. Nhưng anh sẽ cố gắng hết sức để chăm sóc em, bảo vệ em, không để em chịu bất cứ tổn thương nào.”<br>Đôi mắt của Giản Thù dần nhòe đi. Đội trưởng Phó mà không biết nói lời âu yếm ư, rõ ràng anh rất giỏi mà<br>Phó Thời Lẫm nắm chặt bàn tay cô: “Làm vợ anh nhé?”<br>Giản Thù nghẹn ngào gật đầu.<br>Phó Thời Lẫm chầm chậm đeo chiếc nhẫn lên tay cô, kích cỡ vừa như in. Sau đó, anh cúi đầu hôn lên nơi mà mình vừa đeo nhẫn.',
        },
        {
            id: 61,
            status: 1, 
            title: 'Anh đến cùng ánh sao trời - 2',
            category: "Tình cảm",
             img: './images/products/tình cảm/c4.jpg',
            price: 153000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>“Đội trưởng Phó, anh ghen rồi hả?”<br>Phó Thời Lẫm vẫn rất lạnh nhạt: “Làm gì có.”<br>“Vậy sao cả tiết học anh cứ nhìn chằm chằm người ta như nhìn tội phạm vậy?” Giản Thù vừa nói vừa ghé sát mặt mình vào anh: “Lúc anh nói chuyện không dám nhìn em. Tâm lý học tội phạm nói, khi con người nói dối thường sẽ có biểu hiện chột dạ, không dám nhìn thẳng vào mắt đối phương.”<br>Phó Thời Lẫm vô thức đưa tay sờ mũi.<br>Giản Thù lại bổ sung một câu: “Động tác cơ thể cũng không tự nhiên.”<br>Cuối cùng Phó Thời Lẫm cũng khẽ bật cười, không che giấu nữa: “Em hứng thú với nghiên cứu tâm lý học tội phạm vậy sao?”<br>“Cũng không hẳn.” Giản Thù chớp chớp mắt: “Em thích nghiên cứu anh hơn.”',
        },
        {
            id: 62,
            status: 1, 
            title: 'Siêu cấp cưng chiều - tập 1',
            category: "Tình cảm",
             img: './images/products/tình cảm/c5.webp',
            price: 145000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Lê Tiếu – cô con gái cưng nhà họ Lê ở Nam Dương bị từ hôn, cả gia đình bèn tìm cách dạy cho kẻ đã từ hôn một bài học. Cũng qua lần từ hôn này mà Lê Tiếu có dịp gặp gỡ Thương Úc - anh trai của người đã từ hôn.<br>Chẳng biết từ lúc nào, bá chủ Nam Dương lại chú ý tới cô con gái út cá tính và bí ẩn của nhà họ Lê; chẳng ai hay, cô chiêu nhà họ Lê đã phải lòng bá chủ Nam Dương từ bao giờ.<br>Sự dung túng và cách đối xử đặc biệt của Thương Úc dành cho Lê Tiếu khiến cô ngày một tò mò và lún sâu. Sự tự tin, cá tính và những điều bí ẩn ở Lê Tiếu khiến Thương Úc hứng thú. Cứ thế, vận mệnh diệu kỳ đã trói buộc hai con người, hai sự tồn tại đặc biệt ở Nam Dương lại với nhau.',
        },
        {
            id: 63,
            status: 1, 
            title: 'Vì em không xứng - tập 1',
            category: "Tình cảm",
             img: './images/products/tình cảm/c6.webp',
            price: 111300,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Một ngày nọ, Lăng Dương hy sinh vì lợi ích của anh em tốt, lên mạng mua một nick nhân vật nữ tư tế, đổi sang chơi game ở máy chủ phiên bản mới. Đâu ai biết, cái nick tồi tàn mà cậu vét sạch tiền túi ra mua lại mang theo những mối lương duyên rối rắm tới tận đời thực, hơn nữa còn được khuyến mãi thêm người yêu, miễn đổi trả!<br><b><u>Đôi nét tác giả</u></b><br>Dịch Tu La (易修罗)<br>Tự giới thiệu bản thân: Là chủ weibo trứ danh chọc người ta phát khóc, là tác giả chọc người ta bực bội. 눈_눈<br>Tác phẩm tiêu biểu:<i> Khế tử, Chờ anh nhìn lên (tên tạm dịch), Nhất niệm thành thần (tên tạm dịch), Mấy anh trai chơi game giỏi quá đi mất (Tạm dịch),...</i>',
        },
        {
            id: 64,
            status: 1, 
            title: 'Vì em không xứng - tập 2',
            category: "Tình cảm",
             img: './images/products/tình cảm/c7.webp',
            price: 111300,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Một ngày nọ, Lăng Dương hy sinh vì lợi ích của anh em tốt, lên mạng mua một nick nhân vật nữ tư tế, đổi sang chơi game ở máy chủ phiên bản mới. Đâu ai biết, cái nick tồi tàn mà cậu vét sạch tiền túi ra mua lại mang theo những mối lương duyên rối rắm tới tận đời thực, hơn nữa còn được khuyến mãi thêm người yêu, miễn đổi trả!<br><b><u>Đôi nét tác giả</u></b><br>Dịch Tu La (易修罗)<br>Tự giới thiệu bản thân: Là chủ weibo trứ danh chọc người ta phát khóc, là tác giả chọc người ta bực bội. 눈_눈<br>Tác phẩm tiêu biểu:<i> Khế tử, Chờ anh nhìn lên (tên tạm dịch), Nhất niệm thành thần (tên tạm dịch), Mấy anh trai chơi game giỏi quá đi mất (Tạm dịch),...</i>',
        },
        {
            id: 65,
            status: 1, 
            title: 'Buông bỏ cô ấy ra',
            category: "Tình cảm",
             img: './images/products/tình cảm/c8.webp',
            price: 65000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b><i>Thông tin tác giả:</i></b><br>Ức Cẩm – một cô gái hoạt bát, phóng khoáng, lấy đọc sách, viết văn làm niềm vui. Cô là tác giả của trang mạng văn học Tấn Giang. Với phong cách nhẹ nhàng, tình cảm và những lời văn ngọt ngào mà dí dỏm, các tác phẩm của cô luôn được nhiệt tình đón nhận.<br><b><i>Thông tin tác phẩm:</i></b><br>Diệp Sơ ngay từ khi mới sinh đã ốm yếu, phải chạy đi chạy lại suốt ngày ở bệnh viện trong một thời gian dài. Đến khi khỏi bệnh, bà mẹ Lưu Mĩ Lệ lại chăm con quá mức khiến Diệp Sơ thừa cân, nên toàn bị bạn bè trêu chọc là Diệp Thừa Cân.<br>Ngay từ tấm bé, Diệp Thừa Cân đã là bạn thanh mai trúc mã với cậu bé hàng xóm Thẩm Nam Thành. Hễ ai bắt nạt Diệp Thừa Cân, y như rằng đều bị “đại ca” Thẩm Nam Thành “xử” đẹp. Tiếc rằng tình bạn này chẳng được dài lâu khi Thẩm Nam Thành sớm theo gia đình sang Mỹ định cư.<br>Ngay sau khi gia đình Thẩm Nam Thành chuyển đi, nhà họ Vệ mang cậu con trai Vệ Bắc đến làm hàng xóm cạnh nhà Diệp Sơ. Diệp Sơ ngoan bao nhiêu thì Vệ Bắc nghịch ngợm bấy nhiêu, luôn bày trò chọc phá hàng xóm, thầy cô giáo ở trường học. Thậm chí bố mẹ của Diệp Sơ từng bảo nhau, nhất định không được để thằng nhóc hàng xóm Vệ Bắc làm hỏng cô con gái cưng của mình.<br>Khi mà ai nấy đều đau đầu vì Vệ Bắc, chỉ có mỗi Diệp Sơ trước cậu bạn hàng xóm tinh quái lại không hề khóc, không hề sợ hãi dù Diệp Sơ luôn là tâm điểm trêu chọc của cậu ta.<br>Theo năm tháng trưởng thành, Vệ Bắc từ thù địch chuyển sang yêu mến Diệp Sơ, không ngừng yêu thương, không ngừng theo đuổi. Nhưng chính lúc tình yêu của cả hai chớm nở thì cũng là khi Thẩm Nam Thành đột ngột trở về. Bị kẹt giữa hai chàng “hàng xóm” cũ, liệu tình yêu của Diệp Sơ sẽ hướng về ai? Liệu cô có thể thay đổi bản tính hung hăng, luôn gây rối của Vệ Bắc?<br>Hài hước và đầy dí dỏm, “Này, buông cô ấy ra!” là cuốn tiểu thuyết vui nhộn của tác giả Ức Cẩm xoay quanh hành trình trưởng thành của Diệp Sơ và Vệ Bắc với nhiều tình tiết khiến bạn không thể ngừng cười. Tuy Vệ Bắc tai quái và thích gây gổ, nhưng chính những trò đùa dai dẳng của cậu cũng đã đem Vệ Bắc đến gần hơn với Diệp Sơ, khiến cô nàng rung động và có một thời thanh xuân không thể nào quên.',
        },
        {
            id: 66,
            status: 1, 
            title: 'Kết thúc của chúng ta',
            category: "Tình cảm",
             img: './images/products/tình cảm/c9.webp',
            price: 159800,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Sau khi tốt nghiệp, Lily Bloom rời khỏi thị trấn quê hương để tới Boston sống tự lập và hiện thực hóa giấc mơ mở tiệm hoa của mình. Tại đây, cô vướng vào mối quan hệ tình ái lạ lùng với bác sĩ phẫu thuật thần kinh Ryle Kincaid. Mỗi người đều bị người kia cuốn hút, nhưng Lily muốn điều gì bền vững dài lâu, còn Ryle lại không muốn bị trói buộc vào một mối quan hệ chính thức. Bất chấp khác biệt, cũng như nhờ nhiều sự kiện tình cờ thú vị không kém phần hài hước, họ vẫn đến với nhau và trở thành một gia đình. Thế nhưng ngay khi Lily cảm thấy cuộc đời mình không thể viên mãn hơn, cô bỗng thấy mình phải đối diện với điều đã khiến cô căm ghét bố mẹ mình: bạo hành.<br>Kết thúc của chúng ta giống như món đồ uống được pha trộn rất khéo: vừa có vị ngọt ngào khó tả của tình yêu, lại có những cái đắng ngắt của cuộc sống gia đình, cùng vị buồn ngây ngây của những kí ức được hé lộ dần dần trong khi thưởng thức, và cũng phải nói đến cả sự hài hước duyên dáng làm dịu đi những trường đoạn căng thẳng của câu chuyện. Các nhân vật dù chính hay phụ, thậm chí rất phụ, cũng được khắc họa rất sống động mà lại không lấn át lẫn nhau, tạo thành một tổng thể hết sức hài hòa, một cuốn sách có thể làm hài lòng ngay cả những độc giả khó tính.',
        },
        {
            id: 67,
            status: 1, 
            title: 'Showbiz là của tôi',
            category: "Tình cảm",
             img: './images/products/tình cảm/c10.webp',
            price: 144300,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Hứa Trích Tinh từng là một cô gái sống trong sự bao bọc yêu thương của gia đình. Thế nhưng sau khi mẹ cô qua đời vì bạo bệnh, bố bị tai biến nằm liệt giường do công ty phá sản, cuộc sống của cô công chúa nhỏ đã hoàn toàn đảo lộn. Trong những tháng ngày đen tối ấy, Sầm Phong – một thần tượng thiếu niên mới ra mắt với nụ cười ấm áp đã trở thành ánh sáng duy nhất giúp cô có thêm niềm tin vào cuộc sống.<br>Nhưng rồi, bi kịch lại ập đến khiến Sầm Phong tự kết thúc cuộc đời mình bằng cách vô cùng đau đớn, để lại Hứa Trích Tinh với nỗi đau khôn cùng.<br>Tưởng như vận mệnh từ đây đã không còn ánh sáng, nhưng bất ngờ sau vụ tai nạn nghiêm trọng, Hứa Trích Tinh được quay lại mười năm trước – khi mọi thứ vẫn còn tốt đẹp. Liệu lần này, cô sẽ làm gì để thay đổi số phận của mình và cứu lấy Sầm Phong?<br>“Hứa Trích Tinh ngẩng đầu lên trong ánh sáng trắng, nhìn thấy chàng thiếu niên trên màn hình LED.<br>Chàng trai với mái tóc đen mềm mại đang mặc chiếc áo len màu trắng, ngồi chơi đàn piano, tựa như hoàng tử cao quý và dịu dàng, nở nụ cười tươi rói với cô.<br>Nụ cười rạng rỡ ấy như ánh nắng mặt trời soi rọi xuống đêm đông rét buốt mịt mù, sưởi ấm con tim băng giá và tuyệt vọng nơi lồng ngực cô…”',
        },
        {
            id: 68,
            status: 1, 
            title: 'Vật lý thống kê cho trẻ em',
            category: "Khoa học",
             img: './images/products/khoa học/c1.webp',
            price: 30000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Bộ Sách Vỡ Lòng Về Khoa Học - Vật Lý Thống Kê Cho Trẻ Em</b><br>Đây là 1 trong 10 cuốn nối tiếp trong bộ sách Vỡ lòng về Khoa học của tác giả Chris Ferrie đã được nhiều quốc gia đón nhận. Khi quan điểm giáo dục sớm cũng như xu hướng STEAM (khoa học – công nghệ – kĩ thuật – nghệ thuật – toán học) đang ngày càng chứng minh sự hiệu quả đối với học sinh thì bộ sách vỡ lòng về khoa học này chính là một trong những nguồn tài liệu tham khảo mà trẻ em cần. Những cuốn sách nhanh chóng đạt xếp hạng cao nhờ đáp ứng rất tốt các tiêu chí: nội dung chuẩn xác, cô đọng, minh họa “trực quan”, sáng rõ – phù hợp với khả năng tiếp thu của các em từ tuổi 4+.<br>Ở góc độ của một nhà vật lí và nhà toán học luôn tin tưởng, yêu quý trẻ em, Chris Ferrie khẳng định rằng “không bao giờ là quá sớm để giới thiệu trẻ em đến với thế giới khoa học kì lạ và tuyệt vời!” Chính vì vậy, tác giả cùng các cộng sự đã dày công “giản lược” những kiến thức thuộc lĩnh vực vật lí, hoá học cho đến khoa học vũ trụ, khoa học tên lửa... nhằm giúp các bé tiếp cận với nền khoa học một cách cơ bản, hiệu quả nhất. Thật đáng kinh ngạc khi những cuốn sách chỉ dày khoảng 20 trang lại chứa đựng nguồn kiến thức nền tảng phong phú, hấp dẫn tới như vậy.',
        },
        {
            id: 69,
            status: 1, 
            title: '30 giây khoa học dữ liệu',
            category: "Khoa học",
             img: './images/products/khoa học/c2.webp',
            price: 134500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>30 Giây Khoa Học - 30 Giây Khoa Học Dữ Liệu</b><br>Khoa học dữ liệu (Data science) là một hệ sinh thái nhân tạo mới trong kỉ nguyên thông tin hiện đại, bao gồm từ việc tìm ra tội phạm đến dự đoán dịch bệnh. Nhưng bạn có biết rằng nó không phải chỉ là lượng thông tin khổng lồ được thu thập bởi máy tính, điện thoại thông minh và thẻ tín dụng?<br><b>30 Giây Khoa học dữ liệu</b> bao gồm các nguyên tắc thống kê cơ bản thúc đẩy các thuật toán và cách thức dữ liệu ảnh hưởng đến chúng ta trong mọi lĩnh vực khoa học, xã hội, kinh doanh, giải trí - cùng với các vấn đề đạo đức và lời hứa về một thế giới tốt đẹp hơn trong tương lai. Mỗi đoạn văn 30 giây trình bày chi tiết một khía cạnh của khoa học dữ liệu chỉ trong khoảng 300 từ và một hình minh họa, miêu tả làm thế nào để thu thập các loại dữ liệu khác nhau và sử dụng các chương trình máy tính để tìm ra các qui luật mà mắt người không thể phát hiện ra, góp phần làm thay đổi thế giới. Tìm hiểu những ý tưởng và tiểu sử của những vĩ nhân đằng sau chúng, 30 giây Khoa học dữ liệu là cách nhanh nhất để khám phá cách dữ liệu ảnh hưởng mạnh mẽ đến các vấn đề lớn như biến đổi khí hậu, chăm sóc sức khỏe và cả những chi tiết nhỏ trong cuộc sống hàng ngày của chúng ta.<br><b>Liberty Vittert</b> là Giáo sư Khoa học Dữ liệu tại Trường Olin Business thuộc Đại học Washington, St Louis. Với tư cách là đại sứ của Hiệp hội Thống kê Hoàng gia, nữ chuyên gia của BBC và là thành viên được bầu chọn của Viện Thống kê Quốc tế, Liberty làm việc hết mình để phổ cập Khoa học thống kê và dữ liệu đến cho công chúng. Cô cũng là Phó biên tập cho Tạp chí Harvard Data Science Review và là thành viên Hoa Kì trong Hội đồng quản trị của Tổ chức Người tị nạn Liên hợp quốc (UNHCR).',
        },
        {
            id: 70,
            status: 1, 
            title: 'Bách khoa tri thức về khám phá thế giới cho trẻ em - thiên văn học',
            category: "Khoa học",
             img: './images/products/khoa học/c3.webp',
            price: 45000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Nội dung của bộ sách <b>Bách Khoa Tri Thức Về Khám Phá Thế Giới Cho Trẻ Em</b> đề cập đến rất nhiều những vấn đề mà trẻ muốn biết, từ vũ trụ, trái đất đến giới động vật, thực vật, từ khoa học kỹ thuật đến xã hội cuộc sống. Sách được minh họa bằng những bức tranh sinh động, ngôn ngữ của  đơn giản, dễ hiểu. Mỗi một chủ đề giúp trẻ nhận thức thế giới, tăng cường tri thức, nâng cao khả năng sáng tạo và trí tưởng tượng.<br>Ngoài ra, sách còn giới thiệu những trang web chứa đựng nhiều thông tin, trò chơi và hoạt động thú vị, cập nhật thêm các tin tức mới nhất về các chủ đề.',
        },
        {
            id: 71,
            status: 1, 
            title: 'Cuốn Sách Khoa Học Đầu Tiên Dành Cho Học Sinh Tiểu Học - Câu Chuyện Về Vũ Trụ Kì Diệu',
            category: "Khoa học",
             img: './images/products/khoa học/c4.webp',
            price: 36000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Cuốn Sách Khoa Học Đầu Tiên Dành Cho Học Sinh Tiểu Học - Câu Chuyện Về Vũ Trụ Kì Diệu</b><br>Bộ sách “Cuốn sách khoa học đầu tiên dành cho học sinh tiểu học” sẽ đưa các em lên con tàu du hành ngược thời gian, trở về quá khứ hàng tỉ tỉ năm trước để khám phá về sự sống trên Trái Đất được hình thành và phát triển như thế nào, lịch sử loài người được bắt đầu từ đâu, vũ trụ của chúng ta có điều gì kì diệu, khí hậu đã biến đổi ra sao qua hàng nghìn năm...<br>Cuốn Câu chuyện về vũ trụ kì diệu kể về việc Trước khi Vụ Nổ lớn xảy ra, HOÀN TOÀN KHÔNG CÓ GÌ TỒN TẠI. Không có thiên hà, không có tinh tú, không có hành tinh và không có sự sống... Thế rồi đột nhiên 13,8 tỉ năm trước, một Vụ Nổ lớn (Big Bang) nóng kinh hoàng xảy ra và MỌI CHUYỆN BẮT ĐẦU... Hãy cùng du hành ngược thời gian đến Vụ Nổ lớn, chứng kiến sự hình thành của thiên hà và tinh tú, đồng hành cùng con người đầu tiên đặt chân lên Mặt Trăng và cùng xem những bí ẩn nào còn đang chờ khám phá. Đây là câu chuyện khoa học sinh động về vũ trụ có vô vàn điều kì diệu với lời kể thú vị và hình minh hoạ tuyệt đẹp dành tặng các em.',
        },
        {
            id: 72,
            status: 1, 
            title: 'Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Người Ngoài Hành Tinh Cổ Đại',
            category: "Khoa học",
             img: './images/products/khoa học/c5.webp',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Người Ngoài Hành Tinh Cổ Đại</b><br>Khám phá những bí ẩn vĩ đại của vũ trụ qua cuốn sách "Mãi Mãi Là Bí Ẩn - Người Ngoài Hành Tinh Cổ Đại". Tác phẩm này cung cấp cái nhìn sâu sắc về cuộc sống của người ngoài hành tinh và những dấu vết mà họ để lại trên Trái Đất. Với phong cách viết lôi cuốn, tác giả mở ra những giả thuyết thú vị về lịch sử nhân loại và mối liên hệ với các nền văn minh cổ đại.<br><b>Tại sao bạn nên đọc cuốn sách này?</b><br>Khám Phá Lịch Sử: Tìm hiểu về những hiện tượng kỳ lạ và các di tích cổ xưa có thể liên quan đến người ngoài hành tinh.<br>Giả Thuyết Khoa Học: Đọc các lý thuyết khoa học về sự sống ngoài Trái Đất và các lần tiếp xúc có thể đã xảy ra trong quá khứ.<br>Tư Duy Đột Phá: Thúc đẩy tư duy phản biện và khám phá những câu hỏi lớn về sự tồn tại của con người.<b>Đối Tượng Độc Giả</b><br>Cuốn sách này phù hợp cho những ai yêu thích khoa học viễn tưởng, lịch sử, và nghiên cứu về vũ trụ. Nếu bạn là người đam mê tìm hiểu về bí ẩn của vũ trụ và cuộc sống ngoài hành tinh, đây chính là cuốn sách không thể bỏ qua.<br>Hãy cùng nhau khám phá những điều bí ẩn mà "Mãi Mãi Là Bí Ẩn - Người Ngoài Hành Tinh Cổ Đại" mang lại!',
        },        {
            id: 73,
            status: 1, 
            title: 'Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Sự biến mất của các nền văn minh',
            category: "Khoa học",
             img: './images/products/khoa học/c6.jpg',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Sự Biến Mất Của Các Nền Văn Minh</b><br>Khám phá những điều kỳ bí về sự biến mất của các nền văn minh qua cuốn sách "Mãi Mãi Là Bí Ẩn - Sự Biến Mất Của Các Nền Văn Minh". Tác phẩm này đưa bạn vào hành trình tìm hiểu về những nền văn minh vĩ đại đã một thời thịnh vượng nhưng sau đó lại biến mất một cách bí ẩn.<br><b>Tại sao bạn nên đọc cuốn sách này?</b><br>Khám Phá Lịch Sử: Tìm hiểu về những nền văn minh nổi tiếng như Atlantis, Maya và những lý do có thể dẫn đến sự suy tàn của họ.<br>Giả Thuyết Khoa Học: Khám phá các lý thuyết khoa học và khảo cổ học về sự biến mất của các nền văn minh.<br>Tư Duy Phê Phán: Khuyến khích bạn đặt câu hỏi và suy ngẫm về các yếu tố xã hội, môi trường và chính trị ảnh hưởng đến sự tồn tại của nền văn minh.<br><b>Đối Tượng Độc Giả</b><Br>Cuốn sách này phù hợp cho những ai yêu thích lịch sử, khảo cổ học và những bí ẩn xung quanh sự tồn tại của nhân loại. Nếu bạn đam mê khám phá những điều bí ẩn về quá khứ, đây chính là cuốn sách không thể bỏ qua.<br>Hãy cùng nhau khám phá những bí ẩn mà "Mãi Mãi Là Bí Ẩn - Sự Biến Mất Của Các Nền Văn Minh" mang lại!',
        },        {
            id: 74,
            status: 1, 
            title: 'Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Những lời nguyền linh nghiệm',
            category: "Khoa học",
             img: './images/products/khoa học/c7.webp',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Những Lời Nguyền Linh Nghiệm</b><br>Khám phá sức mạnh huyền bí của những lời nguyền qua cuốn sách "Mãi Mãi Là Bí Ẩn - Những Lời Nguyền Linh Nghiệm". Tác phẩm này đưa bạn vào một hành trình kỳ diệu, nơi những lời nguyền có thể thay đổi vận mệnh và số phận của con người.<br><b>Tại sao bạn nên đọc cuốn sách này?</b><br>Khám Phá Bí Ẩn: Tìm hiểu về nguồn gốc và ý nghĩa của các lời nguyền nổi tiếng trong văn hóa và lịch sử.<br>Tâm Linh và Tâm Lý: Khám phá mối liên hệ giữa lời nguyền và tâm lý con người, cũng như cách mà chúng có thể ảnh hưởng đến cuộc sống.<br>Câu Chuyện Huyền Bí: Đắm chìm trong những câu chuyện thú vị về những lời nguyền đã được ghi lại trong truyền thuyết và văn học.<br><b>Đối Tượng Độc Giả</b><br>Cuốn sách này phù hợp cho những ai đam mê huyền bí, tâm linh và các hiện tượng siêu nhiên. Nếu bạn muốn tìm hiểu về những điều bí ẩn và sức mạnh của lời nói, đây chính là cuốn sách không thể bỏ qua.<br>Hãy cùng khám phá những bí ẩn mà "Mãi Mãi Là Bí Ẩn - Những Lời Nguyền Linh Nghiệm" mang lại',
        },        {
            id: 75,
            status: 1, 
            title: 'Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Bí ẩn về động thực vật',
            category: "Khoa học",
             img: './images/products/khoa học/c9.webp',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Bí Ẩn Về Động Thực Vật</b><br>Khám phá những điều kỳ diệu và bí ẩn về động thực vật qua cuốn sách "Mãi Mãi Là Bí Ẩn - Bí Ẩn Về Động Thực Vật". Tác phẩm này đưa bạn vào một hành trình thú vị, nơi những hiện tượng tự nhiên và sự đa dạng sinh học được tiết lộ một cách sâu sắc.<br><b>Tại sao bạn nên đọc cuốn sách này?</b><br>Khám Phá Sự Đa Dạng: Tìm hiểu về các loài động thực vật độc đáo và những bí ẩn xung quanh sự sống của chúng.<br>Hiện Tượng Tự Nhiên: Khám phá những hiện tượng kỳ thú như sự di cư của động vật, quá trình sinh sản và các chiến lược sinh tồn.<br>Tư Duy Khoa Học: Khuyến khích bạn phát triển tư duy phản biện và tìm hiểu về mối liên hệ giữa các loài trong hệ sinh thái.<br><b>Đối Tượng Độc Giả</b><br>Cuốn sách này phù hợp cho những ai đam mê thiên nhiên, sinh học và muốn tìm hiểu sâu hơn về động thực vật. Nếu bạn yêu thích những câu chuyện kỳ thú về thế giới tự nhiên, đây chính là cuốn sách không thể bỏ qua.<br>Hãy cùng nhau khám phá những bí ẩn mà "Mãi Mãi Là Bí Ẩn - Bí Ẩn Về Động Thực Vật" mang lại!',
        },        {
            id: 76,
            status: 1, 
            title: 'Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Bí ẩn trong đời sống',
            category: "Khoa học",
             img: './images/products/khoa học/c10.webp',
            price: 42500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Mãi Mãi Là Bí Ẩn - Những Hiện Tượng Siêu Nhiên Và Kỳ Bí Trên Khắp Thế Giới - Bí Ẩn Trong Đời Sống</b><br>Khám phá những bí ẩn vĩ đại của vũ trụ qua cuốn sách "Mãi Mãi Là Bí Ẩn - Bí Ẩn Trong Đời Sống". Tác phẩm này cung cấp cái nhìn sâu sắc về cuộc sống của người ngoài hành tinh và những dấu vết mà họ để lại trên Trái Đất. Với phong cách viết lôi cuốn, tác giả mở ra những giả thuyết thú vị về lịch sử nhân loại và mối liên hệ với các nền văn minh cổ đại.<br><b>Tại sao bạn nên đọc cuốn sách này?</b><br>Khám Phá Lịch Sử: Tìm hiểu về những hiện tượng kỳ lạ và các di tích cổ xưa có thể liên quan đến người ngoài hành tinh.<br>Giả Thuyết Khoa Học: Đọc các lý thuyết khoa học về sự sống ngoài Trái Đất và các lần tiếp xúc có thể đã xảy ra trong quá khứ.<br>Tư Duy Đột Phá: Thúc đẩy tư duy phản biện và khám phá những câu hỏi lớn về sự tồn tại của con người.<br><b>Đối Tượng Độc Giả</b><br>Cuốn sách này phù hợp cho những ai yêu thích khoa học viễn tưởng, lịch sử, và nghiên cứu về vũ trụ. Nếu bạn là người đam mê tìm hiểu về bí ẩn của vũ trụ và cuộc sống ngoài hành tinh, đây chính là cuốn sách không thể bỏ qua.<br>Hãy cùng nhau khám phá những điều bí ẩn mà "Mãi Mãi Là Bí Ẩn - Bí Ẩn Trong Đời Sống" mang lại!',
        },        {
            id: 77,
            status: 1, 
            title: 'The Young Scientists - Truyện Tranh Khoa Học Cho Trẻ Em - Level 2 - Tập 11 - Thế Giới Thu Nhỏ Trong “Quả Bóng”!"',
            category: "Khoa học",
             img: './images/products/khoa học/c8.webp',
            price: 52000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>The Young Scientists - Truyện Tranh Khoa Học Cho Trẻ Em - Level 2 - Tập 11 - Thế Giới Thu Nhỏ Trong “Quả Bóng”!</b><br>Nơi nào trên thế giới mà bạn vừa mới khám phá hệ sinh thái của rừng mưa nhiệt đới với cây cối rậm rạp, vẹt bảy màu và ếch cây, bước thêm vài bước lại đặt chân đến Nam Cực, ngắm chim cánh cụt và rét run vì lạnh? Chuyện tưởng như không thể, nay nhờ khoa học đã có thể thực hiện tại nơi được gọi là VÒM SINH HỌC,<Br>Chính là thế giới thu nhỏ trong những “quả bóng” kỳ diệu. Cùng tham quan các vòm sinh học trên thế giới qua chủ điểm của level 2 này nhé!<br>Bên cạnh đó, còn có nhiều nội dung hấp dẫn khác như:<br>- Bạch tuột trổ tài phun mực để vô hiệu hóa kẻ thù.<br>- Cách mà loài ong chăm chỉ làm việc trong tổ? Làm thế nào để tạo thành mật ong? Tìm hiểu vòng đời của ong mật.<br>- Khám phá hệ sinh vật đa dạng tại vùng triều – vùng bãi ven biển giữa lúc thủy triều lên và xuống, nơi trú ngụ của ốc mượn hồn, cua, hà đá, sao biển… và nhiều loài khác.<br>- Loài vi khuẩn có thể “ăn” và “tiêu hóa” nhựa – tín hiệu vui góp phần vào việc giải quyết lượng rác thải nhựa khổng lồ con người thải ra mỗi ngày.<br>- Vì sao ớt lại cay? Làm thế nào để giảm độ cay của ớt? Bật mí nha, uống thật nhiều nước không thể giúp hết cay mà còn khiến bạn cay hơn nữa đó!<br>- Mục khoa học AI: Tìm hiểu về công nghệ Robotics và khám phá những chú robot thông minh điều khiển bằng AI.',
        },
        {
            id: 78,
            status: 1, 
            title: 'Tủ Sách Nhân Vật Lịch Sử - Anh Hùng Hào Kiệt Việt Nam',
            category: "Lịch sử",
             img: './images/products/lịch sử/c1.jpg',
            price: 33500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Tủ Sách Nhân Vật Lịch Sử - Anh Hùng Hào Kiệt Việt Nam</b><br>Sách này là một tài liệu hữu ích cho những ai muốn tìm hiểu về các anh hùng Việt Nam và học hỏi từ những tấm gương sáng.<br>Sách Anh Hùng Hào Kiệt Việt Nam cung cấp cho người đọc những câu chuyện về các anh hùng Việt Nam, những người đã có những hành động anh hùng, dũng cảm, giúp bảo vệ đất nước, dân tộc. Sách cũng cung cấp cho người đọc những bài học về sự kiên trì, sự hy sinh, tinh thần yêu nước, lòng tự hào dân tộc.<br>Với nội dung phong phú và đa dạng, sách Anh Hùng Hào Kiệt Việt Nam là một tài liệu hữu ích cho những ai muốn tìm hiểu về lịch sử Việt Nam và các anh hùng của đất nước. Sách cũng là một lựa chọn tuyệt vời cho những người muốn rèn luyện kỹ năng đọc sách và trau dồi kiến thức.',
        },
                {
            id: 79,
            status: 1, 
            title: 'Việt Sử - Những câu chuyện thú vị',
            category: "Lịch sử",
             img: './images/products/lịch sử/c2.webp',
            price: 72000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Việt Sử Những Câu Chuyện Thú Vị</b><br>Lịch sử Việt Nam từ ngàn xưa đã có biết bao nhiêu câu chuyện lý thú, kỳ lạ về những vùng đất đẹp và linh thiêng, về những con người cần cù chịu khó, không ít trong số họ là những gương anh hùng liệt nữ tài hoa, bất khuất. Tất cả đã tạo nên một đất nước, một dân tộc mà trải bao sóng gió, thử thách của thiên nhiên, địch họa nhưng vẫn hiên ngang đứng vững, phát triển và tồn tại đến muôn đời<br>Bên cạnh đó còn có những đường lối, những sách lược trị quốc an dân nhằm đem lại sự phồn vinh, ổn định và hạnh phúc được ban hành thực hiện.<br>Và cũng trong những giai đoạn nhất định, lịch sử còn xuất hiện những câu chuyện kỳ lạ, nững sự việc khác thường phản ánh bối cảnh xã hội đương thời…<br>Cùng khám phá thêm những câu chuyện li kì đó qua cuốn sách Việt sử Những câu chuyện thú vị',
        },
                {
            id: 80,
            status: 1, 
            title: 'Lịch Sử Châu Âu - European History - Bìa Cứng (Tái Bản 2024)',
            category: "Lịch sử",
             img: './images/products/lịch sử/c3.webp',
            price: 398000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Lịch Sử Châu Âu - European History - Bìa Cứng</b><br>Norman Davies mang lại cho chúng ta một pho sử đồ sộ và đầy tham vọng về châu Âu từ thời Cổ đại đến thời Hiện đại, với văn phong nghiêm cẩn của một sử gia nhưng cũng đầy xúc cảm và tài hoa.<br>Tờ The Observer viết: “Điều kỳ diệu là Norman Davies đã đưa vào công trình nghiên cứu của ông, cùng với niềm đam mê, là thơ ca, âm nhạc, huyền thoại..., tất cả hoà quyện trong những trang sử bi tráng của châu Âu hàng ngàn năm dâu bể.”<br>Còn Norman Davies lại nói: “Tôi đặt ra cho mình nhiệm vụ dường như bất khả thi là cấu trúc lại toàn bộ cảnh quan lịch sử châu Âu qua từng thời kỳ”.<br>Norman Davies là giáo sư sử học, Viện Nghiên cứu Slav và Đông Âu, Đại học London, Anh quốc. Ông cũng là tác giả của nhiều cuốn sách nổi tiếng về lịch sử cổ đại và cận đại.',
        },
                {
            id: 81,
            status: 1, 
            title: 'Góc Nhìn Sử Việt - Việt Hoa Bang Giao Sử - Từ Thời Thượng Cổ Đến Thời Đại Cận Kim',
            category: "Lịch sử",
             img: './images/products/lịch sử/c4.webp',
            price: 75000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Góc Nhìn Sử Việt - Việt Hoa Bang Giao Sử - Từ Thời Thượng Cổ Đến Thời Đại Cận Kim</b><br><b>I. AI NÊN ĐỌC CUỐN SÁCH NÀY</b><br>Bộ sách “Góc nhìn sử Việt” hướng đến nhiều đối tượng độc giả rộng rãi, từ những người học tập và nghiên cứu cho đến những người có đam mê với lịch sử và văn hóa Việt Nam.<br>Học sinh từ lớp 8 đã có thể đọc được.<br><b>II. TÓM TẮT SÁCH</b><br>Cuốn sách "Việt Hoa bang giao sử" kể về các chính sách ngoại giao giữa Việt Nam và Trung Quốc trong lịch sử phong kiến, từ các thủ đoạn ngoại giao, cống phẩm, tước phong qua các thời đại, đến các sứ trình và hành vi của tuế công sứ Việt Nam. Sách cũng phân tích mối quan hệ văn chương ràng buộc giữa các sĩ phu hai nước, thể hiện sự tương tác và ảnh hưởng lẫn nhau trong suốt chiều dài lịch sử.<br><b>III. CUỐN SÁCH CÓ GÌ ĐẶC BIỆT</b><br>Cuốn sách "Việt Hoa bang giao sử" nổi bật với việc cung cấp cái nhìn toàn diện và chi tiết về mối quan hệ ngoại giao giữa Việt Nam và Trung Quốc trong suốt lịch sử phong kiến. Đầu tiên, sách phân tích các chính sách ngoại giao, từ các thủ đoạn và chiến lược đối phó của hai nước đến việc cống nạp và tước phong qua các thời đại. Một điểm nhấn quan trọng là mô tả chi tiết về các sứ trình, hành vi của các vị tuế công sứ Việt Nam, cho thấy sự phức tạp và tinh tế trong hoạt động ngoại giao thời kỳ đó.<br>Ngoài ra, cuốn sách còn tập trung vào mối quan hệ văn chương giữa các sĩ phu Việt Nam và Trung Quốc, phân tích sự tương tác và ảnh hưởng lẫn nhau trong lĩnh vực văn học và tư tưởng. Điều này không chỉ thể hiện sự giao thoa văn hóa mà còn cho thấy sự ràng buộc và hợp tác trên phương diện trí tuệ và học thuật giữa hai dân tộc.<br>Các sự kiện lịch sử quan trọng, các cuộc gặp gỡ và thương lượng giữa hai quốc gia cũng được tường thuật một cách chi tiết và sống động, giúp độc giả hiểu rõ hơn về bối cảnh và diễn biến của mối quan hệ này. Từ đó, "Việt Hoa bang giao sử" không chỉ là một tài liệu lịch sử giá trị mà còn là một tác phẩm mang tính học thuật cao, giúp người đọc có cái nhìn sâu sắc và đa chiều về quan hệ Việt - Trung.<br><b>IV: CÁC TRÍCH ĐOẠN HAY</b><br>"…Kể viết những trang sử bang giao Hoa – Việt này, lúc nào cũng mang một thành ý là phơi bày sự thực đã ghi trong sử sách. Chúng tôi chỉ muốn nói ra một sự thật của những cây bút vô tư, chứ không bao giờ muốn khơi lại đống tro tàn đã tắt ngấm từ những triều đại trước. Xin đừng ai ngộ nhận những quan điểm của chúng tôi mà kết thù vì những chuyện đã qua, không bao giờ trở lại…"<br>"...Trên dòng lịch sử, cái hay cũng như cái dở, chúng ta cần phải thẳng thắn nói ra, miễn sao bằng một ngòi bút khách quan là hơn hết, “Việt Hoa bang giao sử” chỉ là những tấn kịch đã hạ màn, tuy vậy mối kết giao giữa anh em Hoa - Việt vẫn còn bền bỉ đời đời..."<br>"Nước Việt Nam ta, trải qua bốn nghìn năm lịch sử, đã có hàng chục thế kỷ nằm dưới quyền Bắc thuộc, nên văn hóa Trung Hoa đã có một ảnh hưởng sâu xa vào văn hóa nước nhà. Hai dân tộc Việt Hoa đã có một cuộc bang giao truyền thống trải qua mấy ngàn năm lịch sử. Kể từ thượng cổ thời đại cho đến thời đại cận kim, cuộc bang giao giữa Việt Nam và Trung Hoa chưa bao giờ đứt đoạn..."<br><i>Nhóm soạn giả: Huyền Quang, Xuân Khôi và Thi Đạt Chí</i>',
        },
                {
            id: 82,
            status: 1, 
            title: 'Việt Sử Tiêu Án (Từ Hồng Bàng Đến Ngoại Thuộc Nhà Minh)',
            category: "Lịch sử",
             img: './images/products/lịch sử/c5.jpg',
            price: 135000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>“Việt sử tiêu án” là tác phẩm phê bình lịch sử, do Ngọ Phong Ngô Thời Sỹ (1726 - 1780) viết. Tác phẩm nêu lên những nghi vấn và quan điểm về những nghi án trong sử Việt qua các bản cựu sử từ đời Hồng Bàng đến hết thời kỳ Minh thuộc (1428).<br>Ngô Thời Sỹ, tự là Thế Lộc, hiệu Ngọ Phong, đạo hiệu Nhị Thanh cư sĩ, người làng Tả Thanh Oai, huyện Thanh Oai, trấn Sơn Nam (sau thuộc tỉnh Hà Đông, và nay thuộc huyện Thanh Trì, Hà Nội). Ông đỗ Tiến sỹ đời Cảnh Hưng thứ XXVII, Tây lịch năm 1766 triều đại nhà Lê.<br>Cho dù một số quan điểm trong cuốn sách chưa được chính xác tuyệt đối nhưng cũng chứng tỏ trong tinh thần truyền thống Việt Nam luôn có yếu tố khoa học cầu chân',
        },
                {
            id: 83,
            status: 1, 
            title: 'Đại Việt Sử Ký Toàn Thư - Trọn Bộ - Bìa Cứng (Tái Bản 2025)',
            category: "Lịch sử",
             img: './images/products/lịch sử/c6.webp',
            price: 220000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Đại Việt Sử Ký Toàn Thư Trọn Bộ</b><br>Trong các sách lịch sử cũ của ta , thì " Đại Việt sử ký toàn thư " là một bộ sử lớn chép từ Hồng Bàng đến Ất Mão ( 1675) đời vua Gia Tôn nhà Lê. " Đại Việt sử ký toàn thư " là bộ sách lịch sử quý báu trong tủ sách sử cũ của nước Việt Nam , rất cần thiết cho những người nghiên cứu lịch sử dân tộc',
        },
                {
            id: 84,
            status: 1, 
            title: 'Lịch sử Việt Nam - Từ nguồn gốc đến thế kỷ 19',
            category: "Lịch sử",
             img: './images/products/lịch sử/c7.webp',
            price: 115500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Lịch Sử Việt Nam Từ Nguồn Gốc Đến Thế Kỷ XIX</b><br>Đào Duy Anh (25/4/1904 - 1/4/1988) là nhà sử học, địa lý, từ điển học, ngôn ngữ học, nhà nghiên cứu văn hóa, tôn giáo, văn học dân gian nổi tiếng của Việt Nam. Ông được xem là người mở đầu cho nhiều ngành khoa học xã hội Việt Nam và là một trong số ít người Việt Nam được ghi tên vào bộ từ điển Larousse với tư cách là một nhà bách khoa toàn thư của thời hiện đại. Đặc biệt, ông là một nhà sử học lớn với những công trình nghiên cứu mang tính khai phá, đặt nền tảng cho sự hình thành nền sử học Việt Nam hiện đại.<br>Theo đánh giá của GS-NGND Phan Huy Lê: “GS Đào Duy Anh là người thầy của những thế hệ sử gia đầu tiên được đào tạo từ nền đại học Việt Nam sau Cách mạng tháng Tám 1945” Công trình Lịch Sử Việt Nam Từ Nguồn Gốc Đến Thế Kỷ XIX thuộc cụm công trình lịch sử và văn hóa Việt Nam của Đào Duy Anh vinh dự được truy tặng Giải thưởng Hồ Chí Minh về khoa học xã hội năm 2000.<br> <strong>Mời các bạn đón đọc!</strong>',
        },
                {
            id: 85,
            status: 1, 
            title: 'Sông Đà - Lịch sử một vùng biên cảnh Việt Nam',
            category: "Lịch sử",
             img: './images/products/lịch sử/c8.webp',
            price: 339000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Sông Đà - Lịch Sử Một Vùng Biên Cảnh Việt Nam</b><br>“Sông Đà: Lịch sử một vùng biên cảnh Việt Nam” là công trình nghiên cứu đồ sộ, một tập đại thành về lịch sử vùng cao phía bắc của nhà sử học Philippe Le Failler về lịch sử khu vực sông Đà – một không gian địa lý, lịch sử và văn hóa đặc biệt, vùng biên cảnh của Việt Nam với Lào và Trung Quốc.<br>Trước nay chưa có một công trình nào tương tự. Để hiểu lịch sử vùng cao từ thời Pháp thuộc cho đến những năm 1950, đây là một tài liệu cần phải đọc, và là tài liệu tham khảo khả tín cho học giới.',
        },
                {
            id: 86,
            status: 1, 
            title: 'Góc Nhìn Sử Việt - Lương Ngọc Quyến Và Cuộc Khởi Nghĩa Thái Nguyên 1917',
            category: "Lịch sử",
             img: './images/products/lịch sử/c9.webp',
            price: 65000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Góc Nhìn Sử Việt - Lương Ngọc Quyến Và Cuộc Khởi Nghĩa Thái Nguyên 1917</b><br><b>I. AI NÊN ĐỌC CUỐN SÁCH NÀY</b><br>Bộ sách “Góc nhìn sử Việt” hướng đến nhiều đối tượng độc giả rộng rãi, từ những người học tập và nghiên cứu cho đến những người có đam mê với lịch sử và văn hóa Việt Nam.<br>Học sinh từ lớp 8 đã có thể đọc được.<br><b>II. TÓM TẮT SÁCH</b><br>Cuốn sách kể về cuộc đời và sự nghiệp của Lương Ngọc Quyến, một nhà yêu nước tiêu biểu thời kỳ đầu thế kỷ XX. Cuốn sách tập trung vào hoạt động cách mạng của ông, từ thời gian học tập tại Nhật Bản trong phong trào Đông Du đến việc bị bắt và giam giữ bởi thực dân Pháp. Đặc biệt, sách mô tả chi tiết về cuộc khởi nghĩa Thái Nguyên năm 1917, nơi Lương Ngọc Quyến cùng các đồng chí đã dũng cảm đứng lên chống lại sự áp bức của thực dân Pháp, mặc dù cuộc khởi nghĩa cuối cùng thất bại.<br><b>III. CUỐN SÁCH CÓ GÌ ĐẶC BIỆT</b><br>Lương Ngọc Quyến, tên hiệu là Lương Lập Nham, con trai cụ Cử Nhị Khê – Ôn Như Lương Văn Can. Có thể nói ông là người học sinh Đông Du hiếm hoi đầu tiên của phong trào Đông Du, đánh liều vượt biển, bôn tẩu sang Nhật với hai bàn tay trắng với bầu máu giết thù cứu nước sôi sục.<br>Hai bản tuyên ngôn của Thái Nguyên cách mạng quân, có thể coi đó là hai bản hịch văn kể tội trạng của thực dân Pháp đã thể hiện rõ bầu máu sục sôi đó của ông:<br><i>“… Dân tộc ta vốn dòng dõi rồng tiên. Ruộng đất ta phì nhiêu, dài mấy trăm muôn dặm, đầy những núi non linh tú. Kể từ Hồng Bàng lập quốc đến giờ, lịch sử truyền nối hơn 4.000 năm, trải qua các triều đại Kinh Dương vương, Đinh Tiên Hoàng, Lê Đại Hành, Lý, Trần, Hậu Lê rồi đến bản triều Nguyễn thị, mỗi đời kế tiếp mở mang bờ cõi thêm to, điểm tô non sông thêm đẹp. Phải biết tổ tiên ta đã tốn bao nhiêu thông minh, bày tỏ biết bao nhiêu nghị lực, hy sinh biết bao nhiêu máu thịt, mới xây dựng lên được giang sơn gấm vóc này để lại chúng ta…”</i>- Trích Tuyên ngôn thứ nhất<br><b>IV: CÁC TRÍCH ĐOẠN HAY</b><br>Lòng người đã trung thành sốt sắng,<br>Giời xanh kia ắt chẳng phụ mình.<br>Mai sau bị cực thái hanh<br>Kéo cờ Độc lập giữa thành Thăng Long.<br>Ba mươi triệu Lạc Long tôn tử,<br>Bốn nghìn năm lịch sử quang vinh.<br>Giời Nam rực rỡ văn minh,<br>Sơn hà rửa sạch hôi tanh giặc Hồ<br><i>(Trích thư vĩnh quyết từ trong ngục thất Hà Nội của Lương Ngọc Quyến gửi ra cho phu nhân)</i><br>Bể học xông pha trải bấy lâu<br>Thân tù ngoảnh lại nghĩ mà đau<br>Trăm năm Tổ quốc về quân mọi<br>Bảy thước thân tàn mặc nước sâu<br>Bạn tốt đời nay sao vắng cả<br>Thù nhà kiếp khác dễ quên đâu<br>Hồn ta được gặp Lam Sơn đế<br>Quyết một cười linh chém Pháp đầu<br><i>(Một trong ba bài thơ tuyệt mệnh của người anh hùng Lương Ngọc Quyến)</i><br><b>GIỚI THIỆU TÁC GIẢ:</b><br>Đào Trinh Nhất (1900-1951), tự Quán Chi, là nhà văn, nhà báo Việt Nam giữa thế kỷ XX. Khi viết văn, viết báo, ông ký nhiều bút hiệu: Nam Chúc, Viên Nạp, Hậu Đình, Tinh Vệ, Bất Nghị, Vô Nhị, Hồng Phong, Anh Đào, XYZ... Ông được người trong giới cầm bút đánh giá là người có <i>“cách làm việc nghiêm túc, thận trọng và là người đã biết dùng ngòi bút nghệ thuật làm sống lại nhiều tư liệu đã mai một trong lịch sử cận đại Việt Nam”.</i>',
        },
                {
            id: 87,
            status: 1, 
            title: 'Góc Nhìn Sử Việt - Cao Bá Quát - Danh Nhân Truyện Ký',
            category: "Lịch sử",
             img: './images/products/lịch sử/c10.webp',
            price: 70000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Góc Nhìn Sử Việt - Cao Bá Quát - Danh Nhân Truyện Ký</b><br><b>I. AI NÊN ĐỌC CUỐN SÁCH NÀY</b><br>Bộ sách “Góc nhìn sử Việt” hướng đến nhiều đối tượng độc giả rộng rãi, từ những người học tập và nghiên cứu cho đến những người có đam mê với lịch sử và văn hóa Việt Nam. Học sinh từ lớp 8 đã có thể đọc được.<br><b>II. TÓM TẮT SÁCH</b><br>Cuốn "Cao Bá Quát - Danh nhân truyện ký" kể về cuộc đời và sự nghiệp của Cao Bá Quát, một nhà thơ và nhà văn tài ba thời Nguyễn. Ông nổi tiếng với tài năng văn chương xuất chúng và lòng yêu nước. Cuốn sách cũng mô tả chi tiết các cuộc khởi nghĩa của ông chống lại triều đình, thể hiện tinh thần kiên cường và lòng quyết tâm của một danh nhân lịch sử.<br><b>III. CUỐN SÁCH CÓ GÌ ĐẶC BIỆT</b><br>Một cậu học trò ngạo nghễ,<br>Một thí sinh coi rẻ quan trường,<br>Một khách giang hồ phiêu lãng,<br>Một văn sĩ khinh đời ngạo thế,<br>Một viên giáo thụ bất đắc chí,<br>Một kẻ làm loạn đã đem về cho gia tộc cái họa chu di.”<br>Cuốn sách "Cao Bá Quát - Danh nhân truyện ký" nổi bật với việc tái hiện cuộc đời và sự nghiệp của Cao Bá Quát, một trong những danh nhân văn hóa xuất sắc nhất của Việt Nam thời Nguyễn. Sách mô tả chi tiết về tài năng văn chương kiệt xuất của ông, với nhiều tác phẩm thơ văn nổi tiếng, phản ánh sâu sắc tình hình xã hội và tâm tư của người dân.<br>Ngoài văn chương, cuốn sách còn tập trung vào những giai đoạn quan trọng trong cuộc đời Cao Bá Quát, đặc biệt là cuộc khởi nghĩa chống lại triều đình Nguyễn. Cao Bá Quát được khắc họa như một người có lòng yêu nước nồng nàn, tinh thần đấu tranh kiên cường và lý tưởng cao đẹp. Cuộc khởi nghĩa của ông, dù thất bại, đã để lại dấu ấn sâu sắc trong lịch sử và văn hóa Việt Nam.<br>Sách cũng nhấn mạnh vào sự mâu thuẫn nội tâm của Cao Bá Quát, giữa việc sống theo lý tưởng và đối mặt với hiện thực tàn khốc. Những phân tích sâu sắc về con người và thời đại của ông giúp người đọc hiểu rõ hơn về giá trị và tầm ảnh hưởng của Cao Bá Quát trong lịch sử văn học và phong trào yêu nước Việt Nam.<br><b>GIỚI THIỆU TÁC GIẢ:<br>Trúc Khê Ngô Văn Triện (1901-1947)</b><br>Còn có các bút danh khác: Cẩm Khê, Kim Phượng, Đỗ Giang, Khâm Trai, Ngô Sơn, Hạo Nhiên Đình. Ông là nhà văn, nhà báo, nhà cách mạng Việt Nam.',
        },
                   {
            id: 88,
            status: 1, 
            title: 'Khi mọi điều không như ý',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly1.webp',
            price: 90000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>KHI MỌI ĐIỀU KHÔNG NHƯ Ý - LIỆU BÌNH YÊN CÓ TỒN TẠI GIỮA GIÔNG BÃO? </b><br>Có những ngày, mọi thứ đều chống lại ta - công việc bế tắc, các mối quan hệ rạn nứt, lòng trống rỗng đến nghẹt thở. Ta tự hỏi: "Bao giờ mọi thứ mới ổn?" Nhưng liệu bình yên có đến từ việc thay đổi hoàn cảnh, hay từ cách ta nhìn nhận nó? Hae Min không cho ta một lối thoát thần kỳ, mà là những lời thì thầm ấm áp, giúp ta chậm lại, thấu hiểu chính mình và tìm thấy sự nhẹ nhõm ngay cả khi mọi điều không như ý. ',
        },           {
            id: 89,
            status: 1, 
            title: 'Tâm lý học về tiền',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly2.webp',
            price: 145500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp dụng tới rất nhiều lĩnh vực trong cuộc sống, như rủi ro, sự tự tin, và hạnh phúc. Rất ít chủ đề cung cấp một lăng kính phóng to đầy quyền lực giúp giải thích vì sao mọi người lại hành xử theo cách họ làm hơn là về tiền bạc. Đó mới là một trong những chương trình hoành tráng nhất trên thế giới.<br>Chúng ta hiếm khi lâm vào hoàn cảnh nợ ngập đầu ư? Biết tiết kiệm để dành cho lúc khốn khó hơn ư? Chuẩn bị sẵn sàng cho việc nghỉ hưu? Có những cái nhìn thiết thực về mối quan hệ giữa tiền và hạnh phúc của chúng ta hơn phải không?<br>Chúng ta đều làm những điều điên rồ với tiền bạc, bởi vì chúng ta đều còn khá mới mẻ với trò chơi này và điều có vẻ điên rồ với bạn lại có khi hợp lý với tôi. Nhưng không ai là điên rồ cả – chúng ta đều đưa ra các quyết định dựa trên những trải nghiệm độc đáo riêng có mang vẻ hợp lý với mình ở bất cứ thời điểm nào.',
        },           {
            id: 90,
            status: 1, 
            title: 'Đứa trẻ hiểu chuyện thường không có kẹo ăn',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly3.webp',
            price: 125000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Đứa Trẻ Hiểu Chuyện Thường Không Có Kẹo Ăn</b><br>“Đứa trẻ hiểu chuyện thường không có kẹo ăn” – Cuốn sách dành cho những thời thơ ấu đầy vết thương.<br>Trên đời này có một điều rất kỳ diệu, đó là bậc phụ huynh nào cũng mong muốn con mình trở nên hoàn hảo theo một hình mẫu giống hệt nhau.<br>Lanh lẹ, khôn khéo, dễ thương, luôn nhìn cha mẹ với gương mặt tươi cười trong sáng.<br>Khi người lớn yêu cầu chúng làm gì đó, chúng sẽ vui vẻ làm theo. Không phàn nàn, không oán trách, không cáu gắt, lại càng không phản kháng cãi cự.<br>Những khi cha mẹ mệt mỏi hay chán chường, chúng sẽ rúc vào lòng cha mẹ như một chú chim nhỏ, giúp họ giải tỏa ưu tư phiền muộn.',
        },           {
            id: 91,
            status: 1, 
            title: 'Tâm lý học tích cực',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly4.jpg',
            price: 85000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Tâm Lý Học Tích Cực</b><br>Có bao giờ bạn cảm thấy năng lượng xung quanh mình quá tiêu cực không?<br>Khi đối mặt với các vấn đề trong cuộc sống, bạn có xu hướng lựa chọn những cách giải quyết có phần tiêu cực, dù trong thâm tâm biết đó là sai?<br>Nếu câu trả lời của bạn cho những câu hỏi trên là có, cuốn sách “tích cực” này có khả năng sẽ giúp thổi một luồng gió mới vào tâm trí của bạn.',
        },           {
            id: 92,
            status: 1, 
            title: 'Tư duy phản biện để không bị thao túng tâm lý',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly5.webp',
            price: 206000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Tư Duy Phản Biện - Để Không Bị Thao Túng Tâm Lý</b><br>HÂN HẠNH CHÀO ĐÓN BẠN ĐẾN VỚI "TƯ DUY PHẢN BIỆN"!<br>Dù bạn đọc cuốn sách này vì mục đích công việc hay để giải khuây, vì mục đích học tập hay với mong muốn mở rộng các kỹ năng làm việc, thì các kỹ năng tư duy phản biện vẫn có thể hỗ trợ đắc lực cho bạn theo những cách rất rõ ràng sau đây:<br>- Giúp bạn trở thành người lĩnh hội có chọn lọc và tham gia trên tinh thần phản biện đối với công trình làm việc và các nguồn thông tin của người khác.<br>- Giúp bạn cải thiện chất lượng công việc của bản thân, đồng thời có thể trình bày những kiến thức và ý tưởng trong đầu một cách rành mạch và hiệu quả hơn.<br>- Giúp bạn quản lý thời gian và sự chú ý của mình một cách hiệu quả, đồng thời ngày càng nhận thức rõ nét hơn về những con đường hình thành nên các thiên kiến và tạo ra các sai lầm trong bản thân lối tư duy của chính bạn.',
        },           {
            id: 93,
            status: 1, 
            title: 'Một trái tim nhạy cảm, một cái đầu nghĩ nhiều',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly6.webp',
            price: 73000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>GIỚI THIỆU TÁC PHẨM:</b><br>NHẠY CẢM - KHÔNG PHẢI MÓN QUÀ CŨNG CHẲNG LÀ BẤT HẠNH<br>- Bạn là người luôn cố kìm nén cảm xúc của bản thân dù là tích cực hay tiêu cực?<br>- Bạn dễ xúc động, “hở tí là khóc”?<br>- Bạn cũng là người thường bị ảnh hưởng bởi cái nhìn, suy nghĩ của người khác?<br>- Đôi khi bạn cảm thấy dường như không ai hiểu được mình?<br>Vậy rất có thể bạn là người vừa nhạy cảm, lại vừa nghĩ nhiều.<br>Ai cũng hiểu sự nhạy cảm là nguyên nhân của những đêm trằn trọc mất ngủ, những câu hỏi không có câu trả lời, những cơn đau xé lòng, những suy nghĩ miên man như muốn nổ tung tâm trí, những lần bộc phát cảm xúc để rồi hối hận hay những lần bất lực với bản thân... Dù cả thế giới nói nhạy cảm là một món quà thì sâu bên trong, dường như chẳng ai muốn đón nhận món quà đó.',
        },           {
            id: 94,
            status: 1, 
            title: 'Sống lành để trẻ',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly7.jpg',
            price: 85000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Sống Lành Để Trẻ</b><br>Không bao giờ là quá muộn để bắt đầu trẻ hóa<br>Bạn ăn thế nào thì bạn sẽ trở thành thế ấy. Quả đúng như vậy. Và bạn cảm thấy mình trẻ (già) tới mức nào, bạn sẽ trẻ (già) đúng ở mức đó.<br>Năm tháng chỉ là một phương tiện đánh dấu các mốc thời gian và chẳng hề có chút liên hệ nào với tuổi tác. Một người 30 tuổi có thể đã già, và một người 70 tuổi có khi vẫn trẻ.<br>Thể trạng hiện tại là hệ quả trực tiếp của toàn bộ sự chăm sóc cả về mặt tinh thần và thể chất mà cơ thể nhận được trong quá khứ.',
        },           {
            id: 95,
            status: 1, 
            title: 'Vì sao tôi không thể cảm thấy vui vẻ?',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly8.webp',
            price: 76000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Vì Sao Tôi Không Thể Cảm Thấy Vui Vẻ?</b><br>“Tôi không bất hạnh, nhưng cũng chẳng hạnh phúc.<br>Tôi không muốn chết nhưng kể cả có phải biến mất ngay lúc này cũng chẳng sao.<br>Tôi cảm thấy kiệt sức, nhưng lại không biết điều gì khiến mình trở nên như vậy.<br>Ai cũng đang tiến về giây phút cuối cùng của cuộc đời, vậy mà sao trông họ lại vui vẻ đến thế?”',
        },           {
            id: 96,
            status: 1, 
            title: 'Trò chơi tâm lý',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly9.webp',
            price: 147000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>“Trò chơi tâm lý”</b> là một cuốn sách kinh điển về hành vi của con người, giải thích những trò chơi tâm lý hoang dã và thú vị mà bạn và mọi người xung quanh bạn chơi để thao túng lẫn nhau đồng thời cũng đưa ra các cách chế ngự bản ngã của mình để bạn có thể ngừng chơi với những mối quan hệ độc hại và tận hưởng những mối quan hệ lành mạnh hơn.<br>Trong cuốn sách này, bác sĩ tâm lý Eric Berne sẽ tiết lộ tâm lý đằng sau những tương tác của chúng ta với những người xung quanh đồng thời vạch trần những thủ đoạn vô thức quen thuộc mà mỗi người chúng ta làm để đạt được điều mình muốn từ người khác. Bất kể loại trò chơi nào chúng ta đang chơi, nó thường mang tính thao túng và chúng ta thậm chí không nhận ra mình đang chơi. Bạn sẽ nhớ lại những trò chơi kinh điển như trận chiến giữa các cặp đôi chết người “If it Wen’t For You” hoặc những trò chơi tán tỉnh như “Lets You and Him Fight”.',
        },           {
            id: 97,
            status: 1, 
            title: 'Lo âu xã hội',
            category: "Tâm lý",
             img: './images/products/tâm lý/tly10.webp',
            price: 69000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Lo âu xã hội là tình trạng kéo dài và có thể gây ảnh hưởng nghiêm trọng đến đời sống thường ngày của bạn. Nhưng hành vi trốn tránh, cảm giác sợ hãi và lo lắng tột độ là triệu chứng điển hình mà người mắc chứng lo âu xã hội thường xuyên trải qua. Điều này có thể ngăn bạn đến với những trải nghiệm mới mẻ và có được cuộc sống mà bạn mong muốn.',
        },
        {
            id: 98,
            status: 1, 
            title: 'Husky Và Sư Tôn Mèo Trắng Của Hắn - Tập 7',
            category: "Tình cảm",
             img: './images/products/1/c1.webp',
            price: 151000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Husky Và Sư Tôn Mèo Trắng Của Hắn - Tập 7</b><br>Đạp Tiên Quân Mặc Nhiên ngự trị thiên hạ suốt mười năm, khiến Tu Chân giới máu chảy thành sông, đau thương chồng chất. Đến khi nghĩa sĩ khắp nơi tụ họp lại, tấn công lên đỉnh Tử Sinh hòng ép Mặc Nhiên thoái vị, thì trước mắt họ chỉ còn thi thể đã lạnh băng của hắn.<br>Mặc Nhiên sống lại, trở về thời niên thiếu. Lúc ấy hắn vẫn đang cùng đường đệ Tiết Mông và Sư Muội - ánh trăng sáng trong lòng hắn kiếp trước - theo vị sư phụ thanh cao lạnh lùng Sở Vãn Ninh tu tập, xuống núi trừ yêu, đi tìm vũ khí. Song Mặc Nhiên dần phát hiện nhiều người cũ chuyện xưa vốn tưởng vậy mà không phải vậy…',
        },{
            id: 99,
            status: 1, 
            title: 'Năm Đầu Tiên Khi Tôi Ba Mươi (Bộ 2 Tập)',
            category: "Tình cảm",
             img: './images/products/1/c2.webp',
            price: 170500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b><i>Thông tin tác giả:</i></b><br><b>Mao Lợi </b>là tác giả của chuyên mục tình cảm thời thượng trong mười năm liền tiếp. Cô cũng viết các bản thảo dài kì cho Báo Thanh niên Trung Quốc, Tạp chí Elleman, Trời xuân Vista,…<br><b>Mao Lợi</b> từng đảm nhiệm sản xuất các chương trình truyền hình nổi tiếng như: Chúng ta yêu nhau đi, Tiếng nói của thanh niên thế giới.<br><b><i>Thông tin tác phẩm:</i></b><br>Hai mươi tuổi. Chúng ta hãy còn trẻ. Tuổi trẻ vô giá. Ba mươi tuổi, chúng ta có gì, chúng ta tìm kiếm điều gì? Khong còn trẻ, cũng chẳng phải đã già, chính cái ẩm ương mới thật đáng sợ. Và có lẽ sẽ đáng sợ hơn khi năm ba mươi ta còn là một bà cô ế. Dứt khoát chọn phấn đầu kiếm tiền, làm một người phụ nữ độc lập, qua quýt vội vàng với yêu đương nam nữ, hay đầu tư hẳn hoi xây dựng một gia đình và ngập ngụa trong đống rắc rối mà hôn nhân mang lại.<br>Nhân vật Trần Tô cho ta thấy một cái tôi mâu thuẫn và hoang mang trước tuổi tác điển hình đến không thể điển hình hơn, dù bạn đã ngấp nghé ba mươi, qua ba mươi hay đang ở độ đôi mươi phơi phới.',
        },{
            id: 100,
            status: 1, 
            title: 'Anh Có Thiếu Người Yêu Không? - Tập 2',
            category: "Tình cảm",
             img: './images/products/1/c3.webp',
            price: 110500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Anh Có Thiếu Người Yêu Không? - Tập 2</b><br>An Xuân là một cô gái mũm mĩm, ngây thơ, trong sáng, luôn không tự tin về bản thân và thiếu thốn tình cảm. Cô thường được mọi người gọi với cái tên Am Thuần. Am Thuần đem lòng yêu thích Hạ Đông Giá và ngộ nhận đó là tình đơn phương. Cũng vì yêu Hạ Đông Giá, Am Thuần theo đuổi anh bằng nhiều hành động ngớ ngẩn, nhưng cũng dũng cảm và đáng yêu. Cho đến một ngày, Tứ Trương, bạn thân của Hạ Đông Giá và cũng là bác sĩ khoa truyền nhiễm để ý tới Am Thuần và tấm lòng lương thiện của cô. Tứ Trương âm thầm giúp đỡ cô. Càng ngày, tình cảm của Tứ Trương dành cho Am Thuần càng rõ ràng hơn và tình cảm đó cũng khiến Am Thuần nhận ra tình cảm thật của mình dành cho Tứ Trương. Hai người trở thành người yêu, đồng hành cùng nhau, giúp đỡ và cổ vũ nhau…<br><b>THÔNG TIN TÁC GIẢ</b><br>Ngô Đồng Tư Ngữ tên thật là Ngô Quỳnh, sinh ra và lớn lên ở Hắc Long Giang, Trung Quốc. Cô là một nữ Thiên Yết điển hình, từ nhỏ đã mơ trở thành một hiệp khách giang hồ, hành hiệp trượng nghĩa, luôn mơ rằng sẽ có một bạch mã hoàng tử đạp trên cỏ non và lá xanh đến tìm mình. Sở trường của cô là viết tiểu thuyết lãng mạn và tiểu thuyết lãng mạn có yếu tố trinh thám.<br>Một số tác phẩm nổi bật của Ngô Đồng Tư Ngữ: <b><i>Gió Nam hiểu lòng tôi; Hóa ra em vẫn ở đây chờ anh gặp được em; Nếu như anh chưa từng quên em; Hệ liệt Sổ tay hình cảnh, </i></b>v.v.<br><b>TRÍCH DẪN NỔI BẬT</b><br>a) Am Thuần: “Ngay từ lúc còn nhỏ em đã luôn tự nhủ, chỉ cần em toàn tâm toàn ý đối tốt với người khác thì có thể khiến người khác thích em, sau này em mới biết nghĩ vậy là sai rồi. May mà em gặp được anh.”<br>Tứ Trương: “Ngốc à, tình yêu không có kết quả, cũng không có quá trình thật vô vị.”<br>Am Thuần: “Vậy phải làm sao đây?”<br>Tứ Trương: “Toàn tâm toàn ý đối tốt với anh, yêu anh, coi anh như bảo vật; khi anh bị người ta bắt nạt thì em hãy là người đầu tiên đứng lên bảo vệ anh, mua cho anh đồ ăn vặt mà anh thích ăn, cùng anh xem bộ phim anh thích mà em không thích, giống như anh đối với em vậy.”<br>b) “Tứ Trương: Trong tình yêu, đáng sợ nhất là ông nói gà bà nói vịt, thổ lộ cả ngày trời mà người ta vẫn không hiểu.<br>Am Thuần cặm cụi lau dọn trong nhà, cuối cùng cũng ngẩng đầu lên: Mắt anh bị làm sao thế? Anh đói rồi à? Tôi cũng đói hoa cả mắt rồi, đợi tôi một tí, tôi làm cho anh một đĩa thăn bò sốt cam nhé. <br>Tứ Trương: Cô ấy thực sự không hiểu những gì tôi nói.”',
        },{
            id: 101,
            status: 1, 
            title: 'Showbiz Là Của Tôi - Tập 2 - Tặng Kèm Bookmark',
            category: "Tình cảm",
             img: './images/products/1/c4.webp',
            price: 170500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Showbiz Là Của Tôi - Tập 2</b><br>Có cơ hội sống lại, Hứa Trích Tinh đã hứa với lòng rằng phải nỗ lực bằng mọi giá nhằm xây dựng vương quốc cho Sầm Phong, để ở đó anh được yêu thương, trân trọng, được nhận những gì xứng đáng thuộc về mình.<br>Nhưng dường như cô đã lầm. Chàng trai mà cô ngưỡng mộ suốt bao năm, với đôi mắt lấp lánh niềm đam mê và khát vọng, giờ đây lại chỉ còn là một hình bóng mờ nhạt, xa lạ với chính con đường mình từng lựa chọn.<br>Hứa Trích Tinh không thể hiểu nổi: tại sao Sầm Phong – người từng yêu sân khấu nồng nhiệt như thế – lại quay lưng với nó? Từng có một thời anh cống hiến tất cả cho ánh đèn tụ quang, từng dành cho nó một tình yêu nồng nhiệt.<br>Nhưng bây giờ thì sao?<br>Anh không thích nữa. Anh đã từ bỏ rồi.<br>Liệu Hứa Trích Tinh có thể chữa lành những tổn thương mà Sầm Phong phải gánh chịu suốt bao năm qua? Phải làm thế nào mới khiến chàng trai vốn sinh ra để tỏa sáng ấy yêu tha thiết sân khấu này thêm một lần nữa?',
        },{
            id: 102,
            status: 1, 
            title: 'Khó Dỗ Dành - Tập 1 - Tặng Kèm Bookmark Bồi Cứng',
            category: "Tình cảm",
             img: './images/products/1/c5.webp',
            price: 157500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Khó Dỗ Dành - Tập 1</b><br>Ôn Dĩ Phàm và Tang Diên từng là bạn học, hai người tình cờ gặp lại nhau trong một quán bar, sau đó lại tình cờ trở thành bạn thuê trọ chung.<br>Chuyện cũng chẳng có gì nếu như hồi còn đi học Ôn Dĩ Phàm chưa từng... từ chối tình cảm của Tang Diên.<br>Thật ra Tang Diên là một người rất cộc cằn, anh có thể gây sát thương bằng lời nói với bất kỳ ai, nhưng anh lại vô cùng dịu dàng với Ôn Dĩ Phàm. Yêu thầm cô suốt sáu năm, tìm đủ mọi cách để lưu giữ hình ảnh của cô trong những năm tháng xa cách... Kể cả khi bị cô từ chối, anh vẫn âm thầm dõi theo cô từ xa.<br>Còn về Ôn Dĩ Phàm, vì những tổn thương trong quá khứ mà cô luôn cảm thấy mình không xứng với Tang Diên - một chàng trai quá đỗi đẹp đẽ. Gặp lại sau sáu năm, cô quyết định sẽ không bỏ lỡ Tang Diên lần nữa, thật lòng muốn bù đắp cho những tổn thương mình đã gây ra cho anh năm ấy...<br>Ôn Dĩ Phàm: "Tang Diên à, em mong sau này mình sẽ sống lâu hơn anh sáu năm, để được yêu anh nhiều hơn sáu năm. Vậy là chúng ta huề nhau rồi."',
        },{
            id: 103,
            status: 1, 
            title: 'Bài Học Từ Người Quét Rác (Tái Bản)',
            category: "Kỹ năng sống",
             img: './images/products/1/c6.webp',
            price: 83300,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br>Triết gia Đức F. Hegel nói: “Chẳng có gì trên thế gian này có thể đạt tới mà thiếu đi niềm đam mê”. Ở Nguyễn Mạnh Hùng – Chủ tịch Hội đồng Quản trị kiêm Tổng Giám đốc Công ty Cổ phần Sách Thái Hà, tôi nhận thấy niềm đam mê ấy.<br>Tôi rất may mắn có một đồng nghiệp tuyệt vời như anh Nguyễn Mạnh Hùng. Với thời gian làm việc 12 năm ở FPT, kinh qua nhiều chức vụ và vị trí khác nhau, Nguyễn Mạnh Hùng luôn thể hiện năng lực, quyết tâm và tinh thần làm việc hết mình. 12 năm làm việc cùng nhau để chúng tôi hiểu nhau, để tôi hiểu về anh, nhất là niềm đam mê đối với sách, khả năng lãnh đạo, về tài năng kinh doanh và sự cống hiến hết mình của anh. 12 năm là quá đủ để tôi và các đồng nghiệp tại FPT hiểu con người giản dị và chân thành của anh, hiểu cá tính và tinh thần học hỏi của anh. Điểm khác biệt của Nguyễn Mạnh Hùng là anh luôn hết mình và thành công.<br>Nguyễn Mạnh Hùng đã từ FPT đã chuyển sang một lĩnh vực mới – xuất bản sách. Tôi luôn theo dõi và cổ vũ những thành công của anh và Thái Hà Books. Tôi rất hân hạnh khi viết lời giới thiệu cho cuốn sách đầu tay của anh. Cuốn sách là tập hợp một số bài viết của anh đã đăng trên các báo và tạp chí lớn của Việt Nam trong mấy năm qua. Nội dung cuốn sách Bài học từ người quét rác không nằm ngoài tri thức và sẻ chia tri thức. Ở đây, bạn đọc cũng có thể thấy được phác họa chân dung của Nguyễn Mạnh Hùng – những nét cá tính, những dấu mốc trong cuộc đời, những trăn trở, lo toan của một doanh nhân khi đứng trước các vấn đề xã hội. Như phụ đề của cuốn sách nêu rõ: Doanh nhân với tinh thần xã hội, tôi rất vui mừng khi thấy ở anh Hùng điều nay.<br>Cuốn sách là tập hợp một số bài viết của Nguyễn Mạnh Hùng - Chủ tịch Hội đồng Quản trị kiêm Tổng Giám đốc Công ty Cổ phần Sách Thái Hà - đã đăng trên các báo và tạp chí lớn của Việt Nam trong mấy năm qua. Nội dung cuốn sách Bài học từ người quét rác không nằm ngoài tri thức và sẻ chia tri thức. Ở đây, bạn đọc cũng có thể thấy được phác họa chân dung của tác giả – những nét cá tính, những dấu mốc trong cuộc đời, những trăn trở, lo toan của một doanh nhân khi đứng trước các vấn đề xã hội. Như phụ đề của cuốn sách nêu rõ: Doanh nhân với tinh thần xã hội.<br>“Bài học từ người quét rác” được xuất bản từ năm 2009 đã nhận được rất nhiều sự ủng hộ từ bạn đọc, và liên tục được tái bản. Trong lần tái bản này, tác giả TS Nguyễn Mạnh Hùng sẽ bổ sung thêm các bài viết mới và cuốn sách cũng sẽ trong một diện mạo mới cho tác phẩm.<br><b>TRÍCH ĐỌC SÁCH:<br>Bài học từ người quét rác</b><br>Học là việc của cả đời. Ngày tốt nghiệp đại học, tôi mới bắt đầu sự nghiệp học hành của chính mình học từ cuộc sống. Biết bao người thầy sau này đã dạy cho tôi vô vàn kiến thức. Họ là các giáo sư, tiến sĩ, các chủ tịch, tổng giám đốc của nhiều tập đoàn lớn trên thế giới. Tuy nhiên, tôi không thể nào quên được một người thầy đặc biệt của mình − thầy Allen.<br>Hằng ngày từ ký túc xá trên phố Mountain – Sydney (Australia), tôi khoác ba lô đi học hay lên thư viện. Mỗi buổi sáng, tôi đều gặp một anh công nhân vệ sinh thu dọn quanh khu nhà. Anh luôn tươi cười và kèm theo là lời chào rất thân thiện: “Hello, how are you?” (Chào bạn, bạn khỏe chứ?). Anh làm như vậy ngay khi gặp tôi. Về phần mình, tôi luôn lẳng lặng bước đi, khuôn mặt lạnh tanh và khó chịu. Trong đầu tôi lúc đó chỉ hiện lên một ý nghĩ duy nhất: “Thằng cha này thấy sang bắt quàng làm họ. Hắn thấy mình có chức vụ, có tiền bạc, có học thức nên muốn bắt quen đây. Hắn thì có khác gì mấy cô công nhân vệ sinh hay đi dọn rác trước cổng nhà mình ở Hà Nội”.<br>Ngày tiếp theo, anh công nhân vệ sinh vẫn cười tươi, vẫn chào tôi hết sức niềm nở. Tôi vẫn khó chịu và đút hai tay vào túi quần đi thẳng. Khuôn mặt vênh váo. Ngày thứ ba vẫn vậy, anh quét rác lại chào tôi rất vui vẻ, khuôn mặt thể hiện sự thân thiện với tôi. Tuy nhiên, lần này để cho xong chuyện, tôi đã trả lời anh ta một cách miễn cưỡng: “I am fine, thank you. And you?” (Tôi khỏe, cảm ơn anh. Thế còn anh?) Tôi nói xong và chợt nhận thấy rằng mình đã cười. Tôi đã cười mà không biết, điều này không như trong kế hoạch ban đầu của một người coi thường anh công nhân dọn vệ sinh. Thú vị hơn, tôi phát hiện ra khuôn mặt tươi tỉnh của chính mình, rằng hình như mình vui hơn, dễ chịu hơn, hạnh phúc và thư giãn hơn.<br>Vừa đi tôi vừa nghĩ về mình rồi lẩm bẩm: “Mình thật là ngu dốt”. Quả thật, từ trước đến nay, trong suốt bao nhiêu năm qua, tôi đã có một suy nghĩ không đúng, rằng khi cười với ai đó là tôi mang lại niềm vui cho họ. Khi bắt tay ai, tôi luôn nghĩ mình ban ơn cho họ. Khi gần gũi ai, tôi luôn nghĩ họ được lợi từ tôi. Và, tôi thấy mình thật sai lầm. Bởi, khi tôi cười với anh công nhân quét rác này, người được lợi đầu tiên không phải là anh ta mà là chính tôi.<br>Và tôi chợt nhận ra rằng anh ta đâu có biết tôi là ai. Anh không hề biết tôi có bao nhiêu tiền, làm chức vụ gì, có học thức đến đâu. Trong mắt anh ta, tôi từ ký túc xá bước ra tức tôi là sinh viên, là người đi học. Dù có học tiến sĩ, thạc sĩ hay đại học vẫn là sinh viên. Thậm chí anh cũng chẳng quan tâm tôi có là sinh viên hay không.<br>Trên thực tế, tôi chỉ là một người châu Á da vàng, mũi tẹt. Nhưng anh ta cũng chẳng để ý đến chuyện ấy. Anh chỉ cười và chào tôi như đã và đang làm việc đó với tất cả những ai từ ký túc xá bước ra. Tất cả mọi người là bình đẳng. Tất cả chúng ta là con người. Tôi đã nhận ra vấn đề và cảm thấy vô cùng xấu hổ. Tôi đã được học một bài học quý giá. Từ đó đi đâu, gặp ai tôi cũng chào và cười. Không chỉ cười mà là cười rất tươi. Cười từ trái tim mình, từ đáy lòng mình.<br>Một bữa nọ, khi từ thư viện về, tôi phát hiện ra Allen − người quét rác đang ngồi uống cà phê trong quán. Anh ăn mặc rất lịch sự, vừa nhấm nháp ly cà phê vừa đọc sách. Ngạc nhiên và tò mò, tôi lại gần chào anh, cùng uống cà phê, cùng nghe nhạc với anh. Tôi không ngờ rằng người mặc bộ quần áo bảo hộ, đi lau nhà, quét rác mỗi sáng bây giờ lại biến thành một người lịch lãm, trí tuệ thế này. Bài học nữa tôi đã học được: Mỗi lúc chúng ta đang đảm nhận vai diễn nào đó, đóng vai nào phải làm tốt vai đó. Hơn nữa, không nên coi thường người công nhân quét rác. Anh ấy khiến tôi rất kinh ngạc về kiến thức mà anh ấy có.<br>Allen đã kể cho tôi nghe vanh vách về Kim Tự Tháp ở Ai Cập, về những gì còn sót lại từ vườn treo Babillon ở Iraq, về vùng đất lạnh và băng giá Siberia của nước Nga. Anh nói về thời kỳ La Mã, về Nội chiến Mỹ, về cuộc sống của người Eskimo. Đặc biệt anh nói về Việt Nam khi biết tôi là người Việt (sau này anh kể rằng anh cứ ngỡ tôi là người Thái hay Indonesia).<br>Hóa ra Alen đam mê đi du lịch. Anh đi du lịch qua sách. Những hiểu biết của anh làm tôi kinh ngạc. Anh rất hiểu biết và có trí nhớ cùng sức tưởng tượng tuyệt vời. Allen hỏi tôi khu vực Hạ Long có bao nhiêu hòn đảo? Khi đó, vì không biết, tôi đã nói đại rằng quãng 1.000 đảo.<br>Allen đã giảng giải về các hòn đảo, về địa lý, khí hậu, thảm thực vật và thủy sản cũng như tính chất vùng biển của 1.960 hòn đảo (chứ không phải quãng 1.000 đảo như tôi nghĩ) trong vùng diện tích 1.553 km2 này. Nhờ Allen mà tôi, có lẽ, đến chết không quên được những con số này.<br>Allen đề nghị tôi phân tích về nhạc Việt Nam, nhất là điểm đặc biệt của loại nhạc năm nốt này. Tôi ngạc nhiên vì chưa bao giờ biết đến nhạc của đất nước mình lại chỉ có năm nốt. Tôi luôn nghĩ nhạc gì thì nhạc, đã là nhạc thì phải là bảy nốt chứ. Cuối cùng tôi đã phải há miệng ra nghe Allen nói về chèo, về cải lương, về chầu văn và về các loại nhạc cụ của Việt Nam − đất nước nơi tôi sinh ra và lớn lên. Allen đã dạy cho tôi bài học quý giá về tìm tòi khám phá, rằng tôi phải đọc nhiều hơn, tìm hiểu nhiều hơn, quan sát và ghi nhớ nhiều hơn.<br>Chính từ bài học quý giá này, ngay sau khi về Việt Nam, tôi đã quyết định thực hiện một chuyến xuyên Việt. Tôi quyết đi tham quan dọc đất nước mình không bỏ sót tỉnh nào. Tôi chợt nhận ra rằng mình đã bỏ qua rất nhiều điều quan trọng, rằng tôi đã đi đến tận 39 quốc gia nhưng lại hiểu rất ít về đất nước mình.<br>Ngày tôi đến thăm nhà của Allen, tôi lại học them được một bài học quý giá nữa. Allen có khoảng gần 1.000 cuốn sách. Là người học nhiều, đi nhiều, thường xuyên mua và đọc sách, nhưng tủ sách của tôi còn khá khiêm tốn. Trong khi Allen, một công nhân vệ sinh đã có một tủ sách quá vĩ đại. Anh đam mê sách và đã bỏ một khoản tiền lớn ra mua, trưng bày sách. Anh nói đã đọc hết những cuốn sách này. Thậm chí có những cuốn đọc đến vài lần.<br>Cũng nhờ những lần đến thăm anh, tôi đã được học cách nấu ăn. Làm sao nấu đơn giản, đủ chất, ngon miệng mà không quá cầu kỳ. Một tình bạn thân thiết đã nảy mầm giữa một doanh nhân với một anh quét rác. Chuyện này tôi không thể tưởng tượng được trước đó một vài năm.<br>Từ ngày gặp Allen, tôi bỏ hẳn các tính xấu của mình: kiêu ngạo, soi mói, coi thường người khác. Tôi cũng trở nên điềm đạm hơn, nói nhỏ hơn, ít nóng tính hơn. Tôi cũng không còn “bệnh” nhìn hình dáng bên ngoài mà kết luận con người nữa. Tôi luôn niềm nở và giúp đỡ mọi người.<br>Tôi quyết định chọn sứ mệnh “sẻ chia” từ ngày đó. Cũng nhờ Allen và những người thầy khác, sau này tôi đã hiểu và thực hành nguyên tắc “cho mà không đòi hỏi, cho mà không cần nhận”. Tôi cũng đã triển khai mỗi ngày, mỗi giờ cách sống “pay it forward” (đáp đền tiếp nối). Cũng từ ngày đó, cuộc đời của tôi hạnh phúc, bình an và chan chứa yêu thương hơn.<br>Gần chục năm đã trôi qua. Bây giờ nghĩ lại, nếu không gặp được Allen, chắc tôi vẫn đang quay cuồng trong vòng quay vô tận của đồng tiền, không chút nghỉ ngơi, không dành thời gian để hiểu và sống hạnh phúc với những người xung quanh. Tôi thật biết ơn thầy tôi, bạn tôi − Allen.',
        },{
            id: 104,
            status: 1, 
            title: '50 Câu Hỏi Về Nhân Sinh Quan',
            category: "Kỹ năng sống",
             img: './images/products/1/c7.jpg',
            price: 126000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>50 Câu Hỏi Về Nhân Sinh Quan</b><br>Trong dòng chảy không ngừng của cuộc sống, mỗi người đều ít nhất một lần đối diện với những câu hỏi lớn về ý nghĩa của sự tồn tại, về cách ứng xử trong xã hội, hay sự hòa hợp với nội tâm. Cuốn sách "50 câu hỏi về nhân sinh quan" của tác giả Hoàng Mạnh Hải chính là một lời mời gọi chân thành đến độc giả để cùng suy ngẫm, khám phá những vấn đề đó từ góc nhìn sâu sắc và giàu trải nghiệm.<br><b>Hành trình định hình nhận thức toàn diện</b><br>Tác giả Hoàng Mạnh Hải, với kinh nghiệm thực tiễn và sự thấu hiểu nhân sinh, đã tập hợp 50 câu hỏi đa dạng, được phân loại thành ba mảng chủ đề lớn:<br><b>Phần 1: Những câu hỏi về bản thân</b><br>Đây là phần giúp độc giả tự soi chiếu nội tâm, trả lời những câu hỏi quen thuộc nhưng chưa bao giờ dễ dàng, chẳng hạn như: "Làm thế nào để phân biệt đúng – sai?", "Làm cách nào để cân bằng giữa công việc và cuộc sống?", hay "Có nên thay đổi tính cách hướng nội?". Qua mỗi câu hỏi, tác giả không chỉ đưa ra phân tích lý thuyết mà còn gợi mở những cách tiếp cận thực tế, mang tính ứng dụng cao trong đời sống.<br><b>Phần 2: Những câu hỏi về xã hội</b><br>Phần này mở rộng phạm vi đến các khái niệm xã hội như bình đẳng giới, dân trí, vai trò của giáo dục khai phóng, và trách nhiệm xã hội. Các câu hỏi nhằm khuyến khích độc giả thách thức những định kiến và tư duy lối mòn, chẳng hạn: "Làm thế nào để đánh giá người khác một cách đúng đắn?" hay "Cuộc đời có thật sự công bằng không?".<br><b>Phần 3: Những câu hỏi về tâm linh</b><br>Phần cuối cùng hướng đến khía cạnh tâm linh, nơi tác giả bàn luận về các vấn đề sâu sắc như: "Thiền Vipassana là gì và tác dụng của nó?", "Chết có phải là hết không?", hay "Thế nào là một đời đáng sống?". Những câu trả lời mang giá trị triết học và khơi dậy sự tĩnh lặng và cảm hứng cho độc giả khi đối diện với ý nghĩa tối hậu của cuộc đời.<br><b>Yếu tố đặc biệt trong cách tiếp cận của tác giả</b><br>Khác với những cuốn sách triết học thông thường, <i>"50 câu hỏi về nhân sinh quan"</i> của tác giả Hoàng Mạnh Hải không áp đặt một góc nhìn cụ thể mà khéo léo gợi mở để độc giả tự tìm câu trả lời. Lối hành văn mạch lạc, giàu cảm xúc cùng những câu chuyện minh họa thực tế khiến tác phẩm gần gũi và dễ tiếp cận. Tác giả không chỉ phân tích các câu hỏi mà còn cung cấp phương pháp luận để người đọc rèn luyện tư duy phản biện, khả năng đánh giá, và sự tự nhận thức.<br>Mỗi câu hỏi trong sách đều như một ngọn hải đăng, dẫn lối độc giả trong hành trình khám phá bản thân và thế giới. Đặc biệt, tác giả không né tránh các chủ đề nhạy cảm hay phức tạp mà thẳng thắn bàn luận, tạo nên sự hấp dẫn và chiều sâu cho tác phẩm.',
        },{
            id: 105,
            status: 1, 
            title: 'Từ Thành Nhân Đến Thành Công',
            category: "Kỹ năng sống",
             img: './images/products/1/c8.webp',
            price: 68500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Từ Thành Nhân Đến Thành Công</b><br>Khoảng cách lớn nhất giữa người với người chính là sự hiểu biết về thế giới. Rất ít người có nhận thức sâu sắc và đúng đắn về bản chất để tìm ra hướng thay đổi đúng đắn. Vì con người chính là nhân tố quan trọng nhất để thay đổi thế giới, nên nếu bạn hiểu sai về mình, định hướng sai con đường mình đi thì thế giới sẽ thay đổi theo hướng bạn không mong muốn.<br>Lý giải sâu hơn về điều này, tác giả Thuỷ Mộc Nhiên trong <b>“Từ Thành Nhân Đến Thành Công"</b> đã thể hiện quan điểm cụ thể rằng: Để thay đổi thế giới, chúng ta phải biết cách khai thác tiềm năng trong mình, nhìn sâu vào lòng người, tìm hiểu bản chất, tính cách của họ. Suy cho cùng, mọi vấn đề trên đời đều là vấn đề của con người, bao gồm tính cách, sự tu dưỡng và khuôn mẫu.<br>Ông tin rằng thông qua một giọt nước, người ta có thể nhìn thấu cả đại dương, chính vì vậy, mọi sự thay đổi ngày mai đều bắt đầu từ sự thay đổi của chính bạn ngày hôm nay. Vậy ngày hôm nay, bạn phải bắt đầu từ đâu?<br><b>“Từ Thành Nhân Đến Thành Công"</b> sẽ là câu trả lời cho bạn. Thông qua cuốn sách này, bạn có thể:<br>- Nắm bắt được những quy luật thay đổi của thế giới, định nghĩa lại bản sắc của cá nhân bạn để rồi hoà mình vào dòng chảy của thế giới đó mà không hoà tan<br>- Thấu hiểu những quy luật phát triển kinh tế, kinh doanh và thị trường, mối liên hệ giữa những yếu tố này với bản chất con người để đưa thế giới vận hành theo đúng hướng<br>- Định nghĩa được những điểm yếu thường gặp ở mỗi con người và cách hoàn thiện chúng bằng những quy luật làm người được đúc kết qua hàng triệu năm<br>Với sự uyên bác và cái nhìn đa chiều về những thay đổi của thời đại, tác giả Thuỷ Mộc Nhiên đã tổng kết, nắm bắt những quy luật và xu hướng xã hội. Bằng vốn kiến thức về lịch sử, triết học, văn hoá, ông sẽ đưa người đọc lần lượt khám phá những quy luật giá trị cơ bản để mỗi người có thể soi chiếu, hoàn thiện mình, để “thành nhân", để “thành công".<br>Mặc dù sứ mệnh của mỗi người khi đến với thế giới này một khác, nhưng có chung một đặc điểm, đó là ai cũng phải tu dưỡng bản thân để lấp đầy những thiếu sót của nội tâm, và lấp đầy thế giới này bằng những điều hạnh phúc.',
        },{
            id: 106,
            status: 1, 
            title: 'Bên Ngoài Chiếc Hộp - Phương Pháp Luôn Nhiều Hơn Vấn Đề',
            category: "Kỹ năng sống",
             img: './images/products/1/c9.webp',
            price: 90500,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Bên Ngoài Chiếc Hộp - Phương Pháp Luôn Nhiều Hơn Vấn Đề</b><br>Với quan điểm cốt lõi <i>"Chỉ tìm phương pháp để thành công, không tìm lý do cho thất bại"</i>, <b>BÊN NGOÀI CHIẾC HỘP - Phương pháp luôn nhiều hơn vấn đề</b> là cuốn sách dành cho bất kỳ ai khao khát bứt phá trong công việc và cuộc sống. Với những bài học sâu sắc và phương pháp dễ áp dụng thực tiễn, cuốn sách sẽ giúp bạn trở thành bậc thầy trong giải quyết vấn đề, nâng cao năng lực cạnh tranh và cải thiện chất lượng cuộc sống.<br>Ngay sau khi cuốn sách được xuất bản lần đầu tại Trung Quốc, nó đã nhanh chóng trở thành một trong những cuốn sách bán chạy xuất sắc nhất quốc gia (thuộc thể loại xã hội học) và một trong 10 cuốn sách quản lý doanh nghiệp có ảnh hưởng nhất. Cuốn sách được nhiều công ty, tổ chức sử dụng để xây dựng văn hóa doanh nghiệp. Tác giả Cam Lâm cũng được mời về nhiều tỉnh thành, tập đoàn lớn để diễn thuyết và được Bộ tài chính Trung Quốc mời biên soạn tài liệu về phương pháp tư duy đổi mới.<br>Đây là phiên bản Kỷ niệm 1 triệu bản bán ra của cuốn sách, sở giữ nguyên tư tưởng và khung chính của phiên bản gốc, hơn 60% nội dung đã được thay đổi và bổ sung thêm nhiều ví dụ sống động và tiêu biểu.',
        },{
            id: 107,
            status: 1, 
            title: 'Tư Duy Kinh Tế Để Sống Tinh Tế',
            category: "Kỹ năng sống",
             img: './images/products/1/c10.webp',
            price: 144000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>LÝ GIẢI CÁCH VẬN HÀNH THẾ GIỚI BẰNG TÂM LÝ HỌC VỀ…TIỀN</b><br>- Tại sao bạn luôn có cảm giác mình nghèo?<br>- Tại sao chúng ta vẫn có các quyết định mua sắm bồng bột dù đã luôn nhắc bản thân tỉnh táo?<br>- Tại sao người thông minh chưa chắc đã kiếm được nhiều tiền?<br>Tiền là phương tiện để trao đổi vật chất. Nhưng khi chúng ta không hiểu được bản chất của phương tiện và cách thức hoạt động của nó thì chúng ta sẽ bị chính tiền “thao túng”. “Tư duy kinh tế để sống tinh tế” không phải là một cuốn sách tài chính thông thường, đây chính là một cuốn sách TÂM LÝ HỌC dùng những kiến thức kinh tế để phân tích hành vi của con người từ những lát cắt nhỏ nhất.<br>Tác giả Tạ Tôn Bác - Thạc sĩ chuyên ngành kế toán, quản lý công, chuyên viên kế toán được cấp chứng chỉ CMA, hiện đang đảm nhận chức vụ phó chủ tịch hội đồng quản trị, giám đốc tài chính của một công ty công nghệ sinh học tại Thượng Hải. Với hơn mười năm kinh nghiệm làm việc cho cơ quan chính phủ, nghiên cứu các chính sách tài chính vĩ mô và các đề án tài chính quốc tế như dự án của Ngân hàng Phát triển Châu Á, Tạ Tôn Bác không chỉ có góc nhìn về tài chính cá nhân, tài chính doanh nghiệp mà còn nắm rõ về kinh tế vĩ mô. Nhờ đó, “Tư duy kinh tế để sống tinh tế” đưa tới cho bạn những góc nhìn mới lạ, từ tổng quan tới chi tiết những mảnh ghép về kinh tế, từ đó phân tích hành vi con người và xã hội dưới góc nhìn về “tiền”.<br>- Nước là đồ dùng thiết yếu lại rẻ, nhưng tại sao kim cương lại đắt?<br>- Ai là kẻ ngốc cuối cùng trong giai đoạn bong bóng kinh tế?<br>- Mua bảo hiểm nhưng làm thế nào để không rơi vào “bẫy rập” của các tư vấn viên thiếu lương tâm?<br>Rất nhiều câu hỏi thực tế, gắn liền với đời sống và tâm lý con người sẽ được trả lời trong “Tư duy kinh tế để sống tinh tế”. Xin nhắc lại, đây không phải là một cuốn sách kinh tế bình thường, đây là một cuốn sách TÂM LÝ HỌC VỀ TIỀN. Bạn không chỉ hiểu được về cách xã hội vận hành qua cuốn sách, mà bạn còn hiểu được lí do tại sao con người lại hành động “mất khôn”, tại sao tư bản lại dễ “thao túng” chúng ta. Tạ Tôn Bác và “Tư duy kinh tế để sống tinh tế” sẽ mang tới câu trả lời chi tiết, dễ hiểu nhất cho bạn.<br>Trong thời kỳ kinh tế suy thoái, càng hiểu về tiền bao nhiêu, bạn càng tránh khỏi sai lầm bấy nhiêu. “Tư duy kinh tế để sống tinh tế” là cuốn sách rất nổi tiếng tại Trung Quốc. Hãy đọc và nghiền ngẫm, đây chắc chắn là cuốn sách kinh tế bạn nhất định phải đọc nếu muốn thông thái hơn về tiền và con người.',
        },{
            id: 108,
            status: 1, 
            title: 'Sức Mạnh Của Sự Tử Tế (Tái Bản 2023)',
            category: "Kỹ năng sống",
             img: './images/products/1/c11.jpg',
            price: 73000,stock: 50,
            desc: '<strong>Mô tả sản phẩm</strong><br><b>Sức Mạnh Của Sự Tử Tế</b><br>Trong kinh doanh, tử tế không có nghĩa là thiếu quyết đoán hay cả nể… chẳng dễ mà thành được người tử tế, nhưng một khi đã được rồi thì bạn sẽ:<br>- Nổi trội hơn<br>- Kiếm được nhiều tiền hơn<br>- Vui hơn<br>- Khỏe mạnh hơn<br>- Sống lâu hơn để tận hưởng bốn điều kể trên.<br><b><i>Tử tế là một sức mạnh không ngờ!</i></b><br><i>"Trong thế giới một mất một còn, nơi mà nhiều người xem ra luôn sẵn sàng làm bất cứ điều gì để vươn lên thì Linda Kaplan Thaler và Robin Koval lại chỉ ra, rằng những cử chỉ nhân ái lặng lẽ mới là tiếng nói mạnh mẽ nhất. “Làm ơn”, “Cám ơn” và “Không dám, mời anh chị” mới thực sự là những từ ngữ then chốt trong lời ăn tiếng nói của những người dám nghĩ dám làm. Sức mạnh của sự tử tế phải là cuốn kinh thánh mới cho những ai muốn dẫn đầu.” (<b>Deborah Norville</b>, người dẫn chương trình Inside Edition, chương trình thời sự lâu đời nhất)</i>',
        },
        ]
        products = shuffleArray(products);
        localStorage.setItem('products', JSON.stringify(products));
    }
}
//  HÀM TRỘN NGẪU NHIÊN MẢNG

// Khởi tạo danh sách sản phẩm nổi bật (chỉ cần mảng id)
function createFeatured() {
    if (localStorage.getItem('featured') == null) {
        // Mặc định lấy vài sản phẩm đầu làm nổi bật (đảm bảo tồn tại trong products)
        // Bạn có thể chỉnh lại danh sách id theo ý muốn.
        localStorage.setItem('featured', JSON.stringify([1, 2, 3, 4, 5, 6]));
    } else {
        // Normalize: đảm bảo là mảng số
        try {
            const f = JSON.parse(localStorage.getItem('featured')) || [];
            localStorage.setItem('featured', JSON.stringify(f.map(Number)));
        } catch (e) {
            localStorage.setItem('featured', JSON.stringify([1, 2, 3, 4, 5, 6]));
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Tự khởi tạo dữ liệu khi load trang (không ghi đè window.onload của file khác)
document.addEventListener('DOMContentLoaded', function () {
    try { createProduct(); } catch (e) {}
    try { createFeatured(); } catch (e) {}
});

