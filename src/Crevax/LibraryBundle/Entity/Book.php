<?php
// src/Crevax/LibraryBundle/Entity/Book.php

namespace Crevax\LibraryBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/** 
 * @ORM\Entity
 * @ORM\Table(name="books")
 */
class Book
{
  /**
  * @ORM\Column(type="integer")
  * @ORM\Id
  * @ORM\GeneratedValue(strategy="AUTO")
  */
  protected $id;

  /**
   * @ORM\Column(type="string", length=255)
   * @Assert\NotBlank()
   * @Assert\Length(
   *      min = "2",
   *      max = "255",
   *      minMessage = "Book title must be at least {{ limit }} characters length",
   *      maxMessage = "Book title cannot be longer than {{ limit }} characters length"
   * )   
   */
  protected $title;

  /**
   * @ORM\ManyToOne(targetEntity="Author", inversedBy="products")
   * @ORM\JoinColumn(name="author_id", referencedColumnName="id", nullable=false)
   * @Assert\NotNull()
   */
  protected $author;

  /**
   * Get id
   *
   * @return integer 
   */
  public function getId()
  {
    return $this->id;
  }

  /**
   * Set first_name
   *
   * @param string $title
   * @return Book
   */
  public function setTitle($title)
  {
    $this->title = $title;
   
    return $this;
  }

  /**
   * Get title
   *
   * @return string 
   */
  public function getTitle()
  {
    return $this->title;
  }


  /**
   * Set author
   *
   * @param \Crevax\LibraryBundle\Entity\Author $author
   * @return Book
   */
  public function setAuthor(\Crevax\LibraryBundle\Entity\Author $author = null)
  {
    $this->author = $author;
  
    return $this;
  }

  /**
   * Get author
   *
   * @return \Crevax\LibraryBundle\Entity\Author 
   */
  public function getAuthor()
  {
    return $this->author;
  }
}