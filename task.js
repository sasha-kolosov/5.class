class PrintEditionItem {
    constructor(options) {
        this.name = options.name
        this.releaseDate = options.releaseDate
        this.pagesCount = options.pagesCount
        this.state = 100
        this.type = null
    }

    fix() {
        this.state *= 1.5
    }

    set setState(state) {
        if(state < 0) {
            this.state = 0
        } else if(state > 100) {
            this.state = 100
        } else {
            this.state = state
        }
    }

    get getState() {
        return this.state
    }
}

class Magazine extends PrintEditionItem {
    constructor(options) {
        super(options)
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(options) {
        super(options)
        this.type = 'book'
        this.author = options.author
    }
}

class NovelBook extends Book {
    constructor(options) {
        super(options)
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(options) {
        super(options)
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(options) {
        super(options)
        this.type = 'detective'
    }
}

class Library {
    constructor(options) {
        this.name = options.name
        this.books = []
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let find = false
        for(let i = 0; i < this.books.length; i++) {
            if(i[type] == value) {
                return this.books[i]
            }
        }
        if(find === false) {
            return null
        }
    }

    giveBookByName(bookName) {
        let find = false
        for(let i = 0; i < this.books.length; i++) {
            if(i.name == bookName) {
                let book = this.books[i]
                delete this.books[i]
                return book
            }
        }
        if(find === false) {
            return null
        }
    }
}

// ---------------------------------------------------------------------------------- //

class Student {
    constructor(options) {
        this.name = options.name
        this.gender = options.gender || "Инопрешеленец"
        this.age = options.age
        this.subject = options.subject
        this.marks = []
        this.subjectMarks = {}
    }

    set setSubject(subjectName) {
        this.subject = subjectName
    }

    addMark(mark) {
        this.marks.push(mark)
    }

    addMarks(marks) {
        this.marks = [...this.marks, ...marks]
    }

    getAverage() {
        if(this.marks === undefined){ 
            return 'У студента нет оценок'
        } else {
            let average = 0
            for(let i = 0; i < this.marks.length; i++) {
                average += this.marks[i]
            }
            return average / this.marks.length
        }
    }

    exclude(reason) {
        delete this.subject
        delete this.marks
        this.excluded = reason
    }

    addSubjectMarks(mark, subject) {
        if(mark === 5 || mark === 4 || mark === 3 || mark === 2 || mark === 1) {
            if(this.subjectMarks[subject] == undefined) {
                this.subjectMarks[subject] = [mark]
            } else {
                this.subjectMarks[subject].push(mark)
            }
        } else {
            return 'Ошибка, оценка должна быть числом от 1 до 5'
        }
    }

    getAverageSubject(subject) {
        if(this.subjectMarks[subject] == undefined) {
            return 'У студента нет оценок по этому предмету'
        } else {
            let average = 0
            for(let i = 0; i < this.subjectMarks[subject].length; i++) {
                average += this.subjectMarks[subject][i]
            }
            return average / this.subjectMarks[subject].length
        }
    }

    getAverageSubjects() {
        if(Object.keys(subjectMarks).length === 0 && subjectMarks.constructor === Object) {
            return 'У студента нет оценок'
        } else {
            let average = 0
            let count = 0
            Object.keys(subjectMarks).forEach(function(key) {
                for(let i = 0; i < this[key].length; i++) {
                    average += this[key][i]
                    count += 1
                }
                return average / count
            }, subjectMarks)
        }
    }
}