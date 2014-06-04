<?php
// src/Crevax/LibraryBundle/Entity/Author.php

namespace Crevax\LibraryBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/** 
 * @ORM\Entity
 * @ORM\Table(name="authors")
 */
class Author
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
   *      minMessage = "Author first name must be at least {{ limit }} characters length",
   *      maxMessage = "Author first name cannot be longer than {{ limit }} characters length"
   * )   
   */
  protected $first_name;

  /**
   * @ORM\Column(type="string", length=255)
   * @Assert\NotBlank()
   * @Assert\Length(
   *      min = "2",
   *      max = "255",
   *      minMessage = "Author last name must be at least {{ limit }} characters length",
   *      maxMessage = "Author last name cannot be longer than {{ limit }} characters length"
   * )     
   */
  protected $last_name;

  /**
   * @ORM\OneToMany(targetEntity="Book", mappedBy="author")
   */
  protected $books;

  public function __construct()
  {
    $this->books = new ArrayCollection();
  }

  public function __toString()
  {
    return "$this->first_name $this->last_name";
  }

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
   * @param string $firstName
   * @return Author
   */
  public function setFirstName($firstName)
  {
    $this->first_name = $firstName;
   
    return $this;
  }

  /**
   * Get first_name
   *
   * @return string 
   */
  public function getFirstName()
  {
    return $this->first_name;
  }

  /**
   * Set last_name
   *
   * @param string $lastName
   * @return Author
   */
  public function setLastName($lastName)
  {
    $this->last_name = $lastName;
    
    return $this;
  }

  /**
   * Get last_name
   *
   * @return string 
   */
  public function getLastName()
  {
    return $this->last_name;
  }

  /**
   * Add books
   *
   * @param \Crevax\LibraryBundle\Entity\Book $books
   * @return Author
   */
  public function addBook(\Crevax\LibraryBundle\Entity\Book $books)
  {
    $this->books[] = $books;
    
    return $this;
  }

  /**
   * Remove books
   *
   * @param \Crevax\LibraryBundle\Entity\Book $books
   */
  public function removeBook(\Crevax\LibraryBundle\Entity\Book $books)
  {
    $this->books->removeElement($books);
  }

  /**
   * Get books
   *
   * @return \Doctrine\Common\Collections\Collection 
   */
  public function getBooks()
  {
    return $this->books;
  }
}