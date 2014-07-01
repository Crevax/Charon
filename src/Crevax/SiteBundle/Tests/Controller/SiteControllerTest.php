<?php

namespace Crevax\SiteBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class SiteControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertTrue($crawler->filter('html:contains("Salute!")')->count() > 0);
    }
}
